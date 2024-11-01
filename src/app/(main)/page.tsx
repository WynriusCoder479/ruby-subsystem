'use client'

import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useTimeout } from 'usehooks-ts'

interface SearchParams {
	code: string
	product: string
}

const HomePage = ({
	searchParams: { code, product }
}: {
	searchParams: SearchParams
}) => {
	const router = useRouter()

	useTimeout(() => {
		router.push(`/credit-card/common-info?code=${code}&product=${product}`)
	}, 1000)

	return (
		<div className="flex h-screen w-full items-center justify-center">
			<div className="flex flex-col items-center justify-center gap-4">
				<Loader2 className="size-7 animate-spin" />
				<p>Vui lòng chờ trong giây lát</p>
			</div>
		</div>
	)
}

export default HomePage
