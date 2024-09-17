import Link from 'next/link'

import FormWrapper from '@/components/common/form-wrapper'
import { Button } from '@/components/ui/button'

const HomePage = () => {
	return (
		<FormWrapper title="RUBY">
			<div className="flex w-full items-center justify-center">
				<Button
					asChild
					className="w-full"
				>
					<Link href="/credit-card/common-info">Mở thẻ ngay</Link>
				</Button>
			</div>
		</FormWrapper>
	)
}

export default HomePage
