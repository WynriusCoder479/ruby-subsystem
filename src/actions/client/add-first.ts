/* eslint-disable react-hooks/rules-of-hooks */
'use server'

import { format } from 'date-fns'

import { getSheets } from '@/lib/google-sheets'

export const createClient = async (
	uid: string,
	publisherCode: string,
	productCode: string
) => {
	const sheets = await getSheets()

	const timestamp = Date.now()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA!A2:J1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${uid}`,
					format(new Date(timestamp), 'QQQ E dd/LL/yyyy - hh:mm:ss bbb'),
					publisherCode,
					productCode
				]
			]
		}
	})
}
