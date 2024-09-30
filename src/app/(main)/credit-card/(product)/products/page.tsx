/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { addMoreData } from '@/actions/client/add-more'
import Footer from '@/components/common/footer'
import { Button } from '@/components/ui/button'
import { CardType } from '@/features/credit-card/products/types/card.type'
import { getSuggestProducts } from '@/features/credit-card/products/utils/get-suggesst-product'
import { useClient } from '@/stores/client.store'
import { usePublisher } from '@/stores/publisher.store'
import { useUid } from '@/stores/uid.store'

const ProductsPage = () => {
	const { client } = useClient()
	const { code } = usePublisher()
	const { uid } = useUid()

	const [suggestProductList, setSuggestProductList] = useState<CardType[]>([])

	const router = useRouter()

	if (
		client.fullname === '' ||
		client.dob === '' ||
		client.phone === '' ||
		client.email === '' ||
		client.city === ''
	) {
		router.push('/credit-card/non-qualified')
	}

	useEffect(() => {
		const productList = getSuggestProducts(client)

		setSuggestProductList([...suggestProductList, ...productList])
	}, [])

	const { mutate, isPending } = useMutation({
		mutationFn: async ({
			uid,
			product
		}: {
			uid: string
			product: CardType
		}) => {
			const timestamp = Date.now()
			const publisherCode = code.split('RUBY')[1]

			const productCode = product.group === 'vp' ? 'vpbankcc' : product.id

			await addMoreData(uid, timestamp, productCode)

			return product.link(`${timestamp}-${publisherCode}-${productCode}-${uid}`)
		},
		onSuccess: data => {
			router.push(data)
		}
	})

	return (
		<div className="flex w-[400px] flex-col items-center gap-2">
			{suggestProductList.map(product => (
				<div
					key={product.id}
					className="flex h-fit w-96 gap-2 rounded-md border border-foreground/30 bg-background p-2 shadow-md"
				>
					<Image
						src={product.info.image}
						width={397}
						height={629}
						alt={product.info.image}
						className="aspect-[2/3] w-32 overflow-hidden bg-transparent"
					/>
					<div className="flex flex-1 flex-col gap-2">
						<div className="flex flex-1 flex-col justify-between rounded-lg border border-foreground/30 bg-gradient-to-b from-primary/10 to-transparent p-2 text-sm">
							<p className="font-bold">
								Tên thẻ: <span className="font-normal">{product.name}</span>
							</p>
							<p className="font-bold">
								Hạn mức:{' '}
								<span className="font-normal">
									lên đến {product.info.creditLimt} triệu đồng
								</span>
							</p>
							<p className="font-bold">
								Tính năng nổi bật:{' '}
								<span className="font-normal">
									{product.info.specialFeatures}
								</span>
							</p>
						</div>
						<Button
							className="w-full"
							onClick={() => mutate({ uid, product })}
							disabled={isPending}
						>
							Mở thẻ ngay
						</Button>
					</div>
				</div>
			))}
			<Footer />
		</div>
	)
}

export default ProductsPage
