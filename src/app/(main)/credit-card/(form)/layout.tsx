import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex h-full w-full justify-center py-6">
			<div className="flex h-fit w-fit flex-col items-center rounded-2xl border-foreground/20 p-6 lg:border lg:shadow-xl">
				<Image
					src="/ruby-logo.png"
					alt="logo"
					width={3336}
					height={1144}
					className="mb-12 w-40"
				/>
				{children}
			</div>
		</div>
	)
}

export default MainLayout
