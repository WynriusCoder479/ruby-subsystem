import { CardType } from '@/features/credit-card/products/types/card.type'

export const vpbank = [
	{
		id: 'vpbankcc-prime',
		name: 'Vpbank credit card - Prime+',
		group: 'vp',
		link: code =>
			`https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
		condition: {
			age: 18,
			cities: 'all',
			demands: 'Hoàn tiền',
			income: 7000000
		},
		info: {
			creditLimt: '100',
			specialFeatures: 'Hoàn tiền đến 15% giá trị giao dịch',
			image: '/credit-card/vp-prime-card.png'
		}
	},
	{
		id: 'vpbankcc-lady',
		name: 'Vpbank credit card - Lady',
		group: 'vp',
		link: code =>
			`https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
		condition: {
			age: 18,
			cities: 'all',
			demands: 'Hoàn tiền',
			income: 7000000
		},
		info: {
			image: '/credit-card/vp-lady-card.png',
			specialFeatures: 'Hoàn tiền đến 15% giá trị giao dịch',
			creditLimt: '100'
		}
	},
	{
		id: 'vpbankcc-genz',
		name: 'Vpbank credit card - GenZ',
		group: 'vp',
		link: code =>
			`https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
		condition: {
			age: 18,
			cities: 'all',
			demands: 'Hoàn tiền',
			income: 4500000
		},
		info: {
			creditLimt: '100',
			specialFeatures: ' Hoàn tiền đến 10% giá trị giao dịch',
			image: '/credit-card/vp-genz-card.png'
		}
	},
	{
		id: 'vpbankcc-MC2',
		name: 'Vpbank credit card - MC2',
		group: 'vp',
		link: code =>
			`https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
		condition: {
			age: 18,
			demands: 'Tích điểm',
			cities: 'all',
			income: 4500000
		},
		info: {
			creditLimt: '100',
			image: '/credit-card/vp-mc2-card.png',
			specialFeatures: 'Tích lũy điểm thưởng đổi quà với các chi tiêu hợp lệ.'
		}
	},
	{
		id: 'vpbankcc-travel',
		name: 'Vpbank credit card - Travel',
		group: 'vp',
		link: code =>
			`https://cards.vpbank.com.vn/?utm_campaign=JarvisCustCC.Partner&utm_source=FiMi&utm_medium=${code}`,
		condition: {
			age: 18,
			demands: 'Tích dặm bay',
			cities: 'all',
			income: 4500000
		},
		info: {
			specialFeatures: 'Hoàn tiền đến 10% giá trị giao dịch.',
			image: '/credit-card/vp-travel-card.png',
			creditLimt: '100'
		}
	}
] satisfies CardType[]
