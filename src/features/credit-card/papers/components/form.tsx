'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form-input'
import FormMultipleCheckbox from '@/components/ui/form-multiple-checkbox'
import { papers } from '@/features/credit-card/papers/constants/papers.constant'
import {
	PapersSchema,
	papersSchema
} from '@/features/credit-card/papers/schemas/papers.schema'
import { useClient } from '@/stores/client.store'

const PapersForm = () => {
	const form = useForm<PapersSchema>({
		resolver: zodResolver(papersSchema),
		defaultValues: {
			papers: [],
			otherPapers: ''
		}
	})

	const router = useRouter()

	const { client, setClient } = useClient()

	const { mutate, isPending } = useMutation({
		mutationFn: async (
			values: PapersSchema
		): Promise<Omit<PapersSchema, 'otherPapers'>> => {
			return {
				...values,
				papers: [...values.papers, values.otherPapers as string]
			}
		},
		onSuccess: data => {
			setClient({ ...client, ...data })

			router.push('/credit-card/products')
		}
	})

	const onSubmit = form.handleSubmit(values => mutate(values))

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<div className="flex flex-col gap-4">
					<FormMultipleCheckbox
						name="papers"
						isLoading={isPending}
						control={form.control}
						label="Bạn là?"
						isFormMessage
						items={papers}
					/>
					<FormInput
						name="otherPapers"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Thông tin khác"
					/>
					<Button type="submit">Mở thẻ ngay</Button>
				</div>
			</form>
		</Form>
	)
}

export default PapersForm
