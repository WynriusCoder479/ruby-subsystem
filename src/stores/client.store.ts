import { create } from 'zustand'

import { CommonInfoSchema } from '@/features/common-info/schemas/common-info.schema'
import { IncomeAndDemandSchema } from '@/features/income-and-demand/schemas/income-and-demand.schema'

type Client = CommonInfoSchema &
	Omit<IncomeAndDemandSchema, 'otherDemand'> & {
		age: number
	}

interface UseClientStore {
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
		demands: []
	},
	setClient: client => set(state => ({ ...state, client }))
}))
