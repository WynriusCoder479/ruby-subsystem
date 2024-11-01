'use server'

import { formatInTimeZone } from 'date-fns-tz'
import { redirect } from 'next/navigation'

import { linkProduct } from '@/features/credit-card/common-info/constants/link.constant'
import { CommonInfoSchema } from '@/features/credit-card/common-info/schemas/common-info.schema'
import { generateRandomSubString } from '@/lib/gen-id'
import { getSheets } from '@/lib/google-sheets'

export const addInfo = async (
	client: CommonInfoSchema,
	publisherCode: string,
	productCode: string
) => {
	const sheets = await getSheets()

	// const data = [...values].map(value => {
	// 	if (value[0] !== uid) return value

	// 	const rest = value.splice(0, 4)

	// 	const { fullname, ...restClient } = client

	// 	return [...rest, '', fullname.toUpperCase(), ...Object.values(restClient)]
	// })

	const timeStamp = formatInTimeZone(
		new Date(),
		'Asia/Ho_Chi_Minh',
		'QQQ E LL/dd/yyyy - HH:mm:ss'
	)

	const uid = generateRandomSubString(12)

	await sheets.spreadsheets.values.append({
		spreadsheetId: process.env.SHEET_ID,
		range: 'DATA',
		valueInputOption: 'USER_ENTERED',
		requestBody: {
			values: [
				[
					`'${uid}`,
					timeStamp,
					publisherCode,
					productCode,
					'',
					String(client.fullname).toUpperCase(),
					'',
					client.email,
					client.phone,
					client.city
				]
			]
		}
	})

	redirect(linkProduct(publisherCode, productCode))
}
