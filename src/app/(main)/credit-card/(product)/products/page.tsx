'use client'

import { Button } from '@/components/ui/button'
import { products } from '@/features/credit-card/products/constants/products.constant'
import { CardType } from '@/features/credit-card/products/types/card.type'
import { getSuggestProducts } from '@/features/credit-card/products/utils/get-suggesst-product'
import { useClient } from '@/stores/client.store'
import { usePublisher } from '@/stores/publisher.store'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ProductsPage = () => {
	const { client } = useClient()
	const { code } = usePublisher()

	const [suggestProductList, setSuggestProductList] = useState<CardType[]>([])

	useEffect(() => {
		const productList = getSuggestProducts(client)

		setSuggestProductList([...suggestProductList, ...productList])

		console.log(suggestProductList)
	}, [client])

	return (
		<div className="container flex w-full grid-cols-1 flex-wrap justify-center gap-4 pt-4">
			{products.map(product => (
				<div
					key={product.id}
					className="flex h-fit w-96 gap-2 rounded-md border border-foreground/10 bg-background p-2 shadow-md"
				>
					<Image
						src={product.info.image}
						width={397}
						height={629}
						alt={product.info.image}
						className="aspect-[2/3] w-32 overflow-hidden bg-transparent"
					/>
					<div className="flex flex-1 flex-col gap-2">
						<div className="flex flex-1 flex-col justify-between rounded-lg border border-foreground/10 p-2 text-sm">
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
		</div>
	)
}

export default ProductsPage
