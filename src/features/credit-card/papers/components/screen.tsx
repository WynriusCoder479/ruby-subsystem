import FormWrapper from '@/components/common/form-wrapper'
import PapersForm from '@/features/credit-card/papers/components/form'

const PapersScreen = () => {
	return (
		<FormWrapper
			title="Thông tin bổ sung"
			description="Hãy cung cấp một số thông tin bổ sung để chúng tôi có thể gợi ý sản phẩm phù hợp nhất cho bạn"
		>
			<PapersForm />
		</FormWrapper>
	)
}

export default PapersScreen
