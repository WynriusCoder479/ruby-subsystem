'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { addClient } from '@/actions/client/add'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import FormInput from '@/components/ui/form-input'
import FormMultipleCheckbox from '@/components/ui/form-multiple-checkbox'
import { papers } from '@/features/credit-card/papers/constants/papers.constant'
import {
	PapersSchema,
	papersSchema
} from '@/features/credit-card/papers/schemas/papers.schema'
import { generateRandomSubString } from '@/lib/gen-id'
import { useClient } from '@/stores/client.store'
import { usePublisher } from '@/stores/publisher.store'
import { useUid } from '@/stores/uid.store'

const PapersForm = () => {
	const form = useForm<PapersSchema>({
		resolver: zodResolver(papersSchema),
		defaultValues: {
			papers: [],
			otherPapers: ''
		}
	})

	const { code } = usePublisher()
	const { setUid } = useUid()

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
		onSuccess: async data => {
			const uid = `${generateRandomSubString(6)}-${generateRandomSubString(12)}`

			setClient({ ...client, ...data })
			setUid(uid)

			await addClient(
				{
					...client,
					...data
				},
				uid,
				code
			)

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
