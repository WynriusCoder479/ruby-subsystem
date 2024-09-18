import { CardType } from '@/features/credit-card/products/types/card.type'

export const hdb = [
	{
		id: 'hdbvietjet',
		name: 'HD Bank - Vietjet',
		group: 'hdb',
		link: code =>
			`https://hdbank.page.link/?link=https://hdbank.page.link/?channel=dop&productcode=DOPPLX&utm_source=FIMI&utm_campaign=test&utm_channel=DOP&utm_ref=${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`,
		condition: {
			age: 18,
			cities: 'all',
			demands: 'Tích dặm bay',
			income: 7000000
		},
		info: {
			creditLimt: '100',
			image: '/credit-card/hdb-vietjet-card.png',
			specialFeatures: 'Tặng 5% khi mua vé máy bay Vietjet Air.'
		}
	},
	{
		id: 'hdb4in1',
		name: 'HD Bank - 4in1',
		group: 'hdb',
		link: code =>
			`https://hdbank.page.link/?link=https://hdbank.page.link/?channel=dop&productcode=DOPPLX&utm_source=FIMI&utm_campaign=test&utm_channel=DOP&utm_ref=${code}&apn=com.vnpay.hdbank&isi=1461658565&ibi=com.vnpay.HDBank`,
		condition: {
			age: 18,
			cities: 'all',
			demands: 'Tích điểm',
			income: 5000000
		},
		info: {
			creditLimt: '50',
			image: '/credit-card/hdb-4in1-card.png',
			specialFeatures:
				'Tích điểm thưởng SkyJoy cho mỗi giao dịch nội địa hợp lệ'
		}
	}
] satisfies CardType[]
