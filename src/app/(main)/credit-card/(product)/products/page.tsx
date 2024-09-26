/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Footer from '@/components/common/footer'
import { Button } from '@/components/ui/button'
import { products } from '@/features/credit-card/products/constants/products.constant'
import { CardType } from '@/features/credit-card/products/types/card.type'
import { getSuggestProducts } from '@/features/credit-card/products/utils/get-suggesst-product'
import { useClient } from '@/stores/client.store'
import { usePublisher } from '@/stores/publisher.store'

const ProductsPage = () => {
	const { client } = useClient()
	const { code } = usePublisher()

	const [suggestProductList, setSuggestProductList] = useState<CardType[]>([])

	useEffect(() => {
		const productList = getSuggestProducts(client)

		setSuggestProductList([...suggestProductList, ...productList])
	}, [])

	return (
		<div className="flex w-[400px] flex-col items-center gap-2">
			{products.map(product => (
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
							asChild
							className="w-full"
						>
							<Link
								href={product.link(code)}
								target="_blank"
							>
								Mở thẻ ngay
							</Link>
						</Button>
					</div>
				</div>
			))}
			<Footer />
		</div>
	)
}

export default ProductsPage
