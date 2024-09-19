'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { usePublisher } from '@/stores/publisher.store'

const HomePage = () => {
	const searchParams = useSearchParams()

	const router = useRouter()

	const { setCode } = usePublisher()

	useEffect(() => {
		setCode(searchParams.get('code') ?? 'RUBY00000')

		router.push('/credit-card/common-info')
	}, [searchParams, setCode])

	return null
}

export default HomePage
