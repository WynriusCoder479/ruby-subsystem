import { ComboboxItemType } from '@/lib/types'

export const income = [
	{
		label: 'Dưới 4.500.000 VND',
		value: '4.500.000'
	},
	{
		label: 'Từ 4.500.000 VND đến 7.000.000 VND',
		value: '4.500.000-7.000.000'
	},
	{
		label: 'Từ 7.000.000 VND đến 10.000.000 VND',
		value: '7.000.000-10.000.000'
	},
	{
		label: 'Từ 10.000.000 VND đến 15.000.000 VND',
		value: '10.000.000-15.000.000'
	},
	{
		label: 'Trên 15.000.0000 VND',
		value: '15.000.000'
	}
] satisfies ComboboxItemType[]
