import { FC } from 'react'

import { DateTimePicker } from '@/components/ui/datetime-picker'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface FormDatepickerProps {
	control: any
	name: string
	label?: string
	isLoading?: boolean
	isMessage?: boolean
}

const FormDatepicker: FC<FormDatepickerProps> = ({
	control,
	name,
	label,
	isLoading,
	isMessage
}) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex flex-col">
					{label && <FormLabel>{label}</FormLabel>}
					<FormControl>
						<DateTimePicker
							granularity="day"
							placeholder="dd/MM/yyyy"
							displayFormat={{ hour24: 'dd/MM/yyyy' }}
							disabled={isLoading}
							value={field.value}
							onChange={field.onChange}
						/>
					</FormControl>
					{isMessage && <FormMessage />}
				</FormItem>
			)}
		/>
	)
}

export default FormDatepicker
