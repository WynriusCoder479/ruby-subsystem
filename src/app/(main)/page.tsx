'use client'

import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'

import { usePublisher } from '@/stores/publisher.store'

interface HomePageProps {
	searchParams: {
		code: string
	}
}

const HomePage: FC<HomePageProps> = ({ searchParams: { code } }) => {
	const router = useRouter()

	const { setCode } = usePublisher()

	useEffect(() => {
		setCode(code ?? 'RUBY000001')

		router.push('/credit-card/common-info')
	}, [code, router, setCode])

	return null
}

export default HomePage
