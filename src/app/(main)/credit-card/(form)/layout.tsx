import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="relative flex h-full w-full flex-col items-center justify-center">
			<Image
				src="/ruby-logo.png"
				alt="logo"
				width={3336}
				height={1144}
				className="mb-12 w-40"
			/>
			{children}
		</div>
	)
}

export default MainLayout
