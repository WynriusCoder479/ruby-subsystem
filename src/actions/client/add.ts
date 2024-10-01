/* eslint-disable react-hooks/rules-of-hooks */
'use server'

import { format } from 'date-fns'

import { getSheets } from '@/lib/google-sheets'
import { Client } from '@/stores/client.store'

export const addClient = async (client: Client, uid: string, code: string) => {
	const sheets = await getSheets()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA!A2:J1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${uid}`,
					'',
					'',
					code,
					client.fullname.toUpperCase(),
					format(new Date(client.dob), 'dd/LL/yyyy'),
					client.age,
					`'${client.phone}`,
					client.email,
					client.city,
					client.income,
					client.demands.join(','),
					client.papers.join(',')
				]
			]
		}
	})
}
