import { FC, PropsWithChildren } from 'react'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="flex h-full w-full items-center justify-center">
			hell
			{children}
		</div>
	)
}

export default MainLayout
