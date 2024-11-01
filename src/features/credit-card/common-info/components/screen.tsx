import { FC } from 'react'

import FormWrapper from '@/components/common/form-wrapper'
import CommonInfoForm from '@/features/credit-card/common-info/components/form'

interface CommonInfoScreenProps {
	code: string
	product: string
}

const CommonInfoScreen: FC<CommonInfoScreenProps> = ({ ...props }) => {
	return (
		<FormWrapper
			title="Thông tin cá nhân"
			description="Hãy cung cấp một số thông tin cá nhân để chúng tôi biết bạn là ai"
		>
			<CommonInfoForm {...props} />
		</FormWrapper>
	)
}

export default CommonInfoScreen
