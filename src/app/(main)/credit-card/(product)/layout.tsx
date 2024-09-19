import { FC, PropsWithChildren } from 'react'

import Header from '@/components/common/header'

const ProductLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="h-screen">
			<Header />
			<div className="flex flex-col gap-4">
				<h3 className="tra p-4 text-center text-xl font-bold">
					Những dòng sản phẩm phù hợp với nhu cầu của bạn
				</h3>
				<hr className="px-2" />
				{children}
			</div>
		</div>
	)
}

export default ProductLayout
