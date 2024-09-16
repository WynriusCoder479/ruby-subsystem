import FormWrapper from '@/components/common/form-wrapper'
import IncomeAndDemandForm from '@/features/income-and-demand/components/form'

const IncomeAndDemandScreen = () => {
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
