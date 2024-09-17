import { z } from 'zod'

export const incomeAndDemand = z.object({
	income: z.string({ required_error: 'Vui lòng chọn mức thu nhập của bạn' }),
	demands: z.array(z.string()).refine(value => value.some(item => item), {
		message: 'Hãy chọn ít nhất 1 nhu cầu'
	}),
	otherDemand: z.string().optional()
})

export type IncomeAndDemandSchema = z.infer<typeof incomeAndDemand>
