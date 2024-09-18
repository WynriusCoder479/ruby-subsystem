import { create } from 'zustand'

import { CommonInfoSchema } from '@/features/credit-card/common-info/schemas/common-info.schema'
import { IncomeAndDemandSchema } from '@/features/credit-card/income-and-demand/schemas/income-and-demand.schema'
import { PapersSchema } from '@/features/credit-card/papers/schemas/papers.schema'

export type Client = CommonInfoSchema &
	Omit<IncomeAndDemandSchema, 'otherDemand'> &
	Omit<PapersSchema, 'otherPapers'> & {
		age: number
	}

export interface UseClientStore {
	client: Client
	setClient: (client: Client) => void
}

export const useClient = create<UseClientStore>()(set => ({
	client: {
		fullname: '',
		dob: '',
		age: 0,
		email: '',
		phone: '',
		city: '',
		income: '',
		demands: [],
		papers: []
	},
	setClient: client => set(state => ({ ...state, client }))
}))
