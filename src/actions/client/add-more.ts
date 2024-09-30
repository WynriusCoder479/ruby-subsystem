'use server'

import { format } from 'date-fns'

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

	const data = [...values].map(value => {
		if (value[0] !== uid) return value

		const id = value[0]
		const rest = value.slice(3)

		return [
			id,
			format(new Date(timestamp), 'QQQ E dd/LL/yyyy - hh:mm:ss bbb zzzz'),
			productCode,
			...rest
		]
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
