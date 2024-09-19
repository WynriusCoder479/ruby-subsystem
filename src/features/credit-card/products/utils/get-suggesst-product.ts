/* eslint-disable @typescript-eslint/no-unused-vars */
import { products } from '@/features/credit-card/products/constants/products.constant'
import { Client } from '@/stores/client.store'

export const getSuggestProducts = (client: Client) => {
	const income = parseInt(client.income.split('.').join(''))

	return products.filter(product => {
		const isCityMatch =
			product.condition.cities === 'all' ||
			product.condition.cities.includes(client.city)

		const isIncomeMatch = product.condition.income <= income

		const isDemandsMatch = client.demands.includes(product.condition.demands)

		return isCityMatch && isIncomeMatch && isDemandsMatch
	})
}
