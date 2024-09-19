'use client'

import { useRouter } from 'next/navigation'

import CommonInfoScreen from '@/features/credit-card/common-info/components/screen'
import { useReject } from '@/stores/reject.store'

const HomePage = () => {
	const { reject } = useReject()

	const router = useRouter()

	if (reject) {
		router.push('/credit-card/non-qualified')

		return null
	}

	return <CommonInfoScreen />
}

export default HomePage
