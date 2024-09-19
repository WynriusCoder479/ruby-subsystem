/* eslint-disable @typescript-eslint/no-unused-vars */
import { products } from '@/features/credit-card/products/constants/products.constant'
import { Client } from '@/stores/client.store'

export const getSuggestProducts = (client: Client) => {
	const incomeRange = client.income
		.split('-')
		.map(num => parseInt(num.replace(/\./g, '')))
	const minIncome = incomeRange[0]
	const maxIncome = incomeRange[1] || minIncome

	return products.filter(product => {
		const isCityMatch =
			product.condition.cities === 'all' ||
			product.condition.cities.includes(client.city)

		const isIncomeMatch = product.condition.income <= maxIncome

		const isDemandsMatch = client.demands.includes(product.condition.demands)

		return isCityMatch && isIncomeMatch && isDemandsMatch
	})
}
