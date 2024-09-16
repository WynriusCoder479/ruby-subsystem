'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form } from '@/components/ui/form'
import FormCombobox from '@/components/ui/form-combobox'
import FormDatepicker from '@/components/ui/form-date-picker'
import FormInput from '@/components/ui/form-input'
import { cities } from '@/features/common-info/constants/cities.constant'
import {
	CommonInfoSchema,
	commonInfoSchema
} from '@/features/common-info/schemas/common-info.schema'
import { calculateAge } from '@/lib/utils'
import { useClient } from '@/stores/client.store'

const CommonInfoForm = () => {
	const form = useForm<CommonInfoSchema>({
		resolver: zodResolver(commonInfoSchema),
		defaultValues: {
			fullname: '',
			dob: '',
			phone: '',
			email: '',
			city: ''
		}
	})

	const [checked, setChecked] = useState<boolean>(false)

	const { client, setClient } = useClient()

	const router = useRouter()

	const { mutate, isPending } = useMutation({
		mutationFn: async (values: CommonInfoSchema) => {
			const clientAge = calculateAge(values.dob as string)

			if (clientAge < 18) throw Error('Invalid age')

			return {
				...values,
				age: clientAge
			}
		},
		onSuccess: data => {
			setClient({ ...client, ...data })

			router.push('/income-and-demand')
		},
		onError: () => {
			router.push('/non-qualified')
		}
	})

	const checkHandler = () => setChecked(!checked)

	const onSubmit = form.handleSubmit(values => mutate(values))

	return (
		<Form {...form}>
			<form onSubmit={onSubmit}>
				<div className="flex flex-col gap-4">
					<FormInput
						name="fullname"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Họ và tên"
					/>
					<FormDatepicker
						label="Ngày sinh"
						isLoading={isPending}
						control={form.control}
						name="dob"
						isMessage
					/>
					<FormInput
						name="email"
						isLoading={isPending}
						control={form.control}
						isFormMessage
						label="Email"
					/>
					<FormCombobox
						name="city"
						label="Khu vực"
						isLoading={isPending}
						control={form.control}
						form={form}
						initalData="Thành phố"
						items={cities}
						isMessage
					/>
					<div
						className="flex items-start gap-4 pt-4"
						style={{ paddingTop: '.5rem' }}
					>
						<Checkbox
							id="terms"
							checked={checked}
							onCheckedChange={checkHandler}
						/>
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Đồng ý với điểu khoản của chúng tôi.
							</label>
							<p className="text-sm text-muted-foreground">
								You agree to our Terms of Service and Privacy Policy.
							</p>
						</div>
					</div>
					<Button
						type={'submit'}
						className="mt-4 w-full"
						disabled={!checked}
					>
						Tiếp theo
					</Button>
				</div>
			</form>
		</Form>
	)
}

export default CommonInfoForm
