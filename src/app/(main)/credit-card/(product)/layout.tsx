import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const ProductLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="relative flex h-full w-full justify-center">
			<div className="z-50 flex h-fit w-[400px] flex-col items-center rounded-2xl border-foreground/20 bg-background lg:border lg:shadow-xl">
				<Image
					src="/ruby-logo.png"
					alt="logo"
					width={3336}
					height={1144}
					className="my-8 w-40"
				/>
				<h3 className="p-2 text-center text-lg font-bold">
					Những dòng sản phẩm phù hợp với nhu cầu của bạn
				</h3>
				{children}
			</div>
		</div>
	)
}

export default ProductLayout
