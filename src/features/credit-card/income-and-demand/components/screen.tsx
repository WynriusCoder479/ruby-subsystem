'use client'

import { useRouter } from 'next/navigation'

import FormWrapper from '@/components/common/form-wrapper'
import IncomeAndDemandForm from '@/features/credit-card/income-and-demand/components/form'
import { useReject } from '@/stores/reject.store'

const IncomeAndDemandScreen = () => {
	const { reject } = useReject()

	const router = useRouter()

	if (reject) {
		router.push('/credit-card/non-qualified')

		return null
	}

	return (
		<FormWrapper
			title="Thu nhập và Nhu cầu"
			description="Cung cấp thông tin về thu nhập và nhu cầu của bạn sẽ giúp tôi gợi ý sản phẩm phù hợp nhất cho bạn"
		>
			<IncomeAndDemandForm />
		</FormWrapper>
	)
}

export default IncomeAndDemandScreen
