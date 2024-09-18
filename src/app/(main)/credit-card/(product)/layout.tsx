import Header from '@/components/common/header'
import { FC, PropsWithChildren } from 'react'

const ProductLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="h-screen bg-primary/10">
			<Header />
			<div>{children}</div>
		</div>
	)
}

export default ProductLayout
