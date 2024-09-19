'use server'

import { generate as genId } from 'otp-generator'

import { getSheets } from '@/lib/google-sheets'
import { Client } from '@/stores/client.store'

export const addClient = async (client: Client) => {
	const sheets = await getSheets()

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA!A2:J1',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${genId(5, {
						digits: true,
						lowerCaseAlphabets: false,
						specialChars: false,
						upperCaseAlphabets: false
					})}`,
					client.fullname,
					client.dob,
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
