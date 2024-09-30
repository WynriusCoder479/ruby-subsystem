'use server'

import { getSheets } from '@/lib/google-sheets'

export const addMoreData = async (
	uid: string,
	timestamp: string | number,
	productCode: string
) => {
	const sheets = await getSheets()

	const {
		data: { values }
	} = await sheets.spreadsheets.values.get({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA'
	})

	if (!values) {
		throw Error('Internal server error')
	}

	const getDateFromTimestamp = (timestampInput: string | number) => {
		const date = new Date(timestampInput)

		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()

		return `${day}/${month}/${year}`
	}

	const data = [...values].map(value => {
		if (value[0] !== uid) return value

		const id = value[0]
		const rest = value.slice(3)

		return [id, getDateFromTimestamp(timestamp), productCode, ...rest]
	})

	await sheets.spreadsheets.values.update({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: data
		}
	})
}
