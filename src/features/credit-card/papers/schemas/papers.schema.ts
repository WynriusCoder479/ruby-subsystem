import { z } from 'zod'

export const papersSchema = z.object({
	papers: z.array(z.string()),
	otherPapers: z.string().optional()
})

export type PapersSchema = z.infer<typeof papersSchema>
