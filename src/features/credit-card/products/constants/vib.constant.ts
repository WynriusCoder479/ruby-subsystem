import { CardType } from '@/features/credit-card/products/types/card.type'

export const vibAllowCity = [
	' Bà Rịa - Vũng Tàu',
	'Bình Dương',
	'Cà Mau',
	'Cần Thơ',
	'Đà Nẵng',
	'Đồng Nai',
	'Hà Nội',
	'Thành phố Hồ Chí Minh',
	'Khánh Hoà',
	'Quảng Ngãi',
	'Tây Ninh',
	'Thừa Thiên Huế',
	'Hải Phòng',
	'An Giang',
	'Bình Định',
	'Đắk Lắk',
	'Đồng Tháp',
	'Hải Dương',
	'Kiên Giang',
	'Lâm Đồng',
	'Nghệ An',
	'Phú Thọ',
	'Quảng Ninh',
	'Thái Bình',
	'Thái Nguyên',
	'Thanh Hoá',
	'Vĩnh Phúc',
	'Tiền Giang'
]

export const vib = [
	{
		id: 'vibtra',
		group: 'vib',
		name: 'VIB - Travel',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-travel-eilte&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 20000000,
			cities: vibAllowCity,
			demands: 'Giao dịch ngoại tệ'
		},
		info: {
			image: '/credit-card/vibtra-card.png',
			creditLimt: '100',
			specialFeatures: 'Phí giao dịch ngoại tệ: chỉ 0%'
		}
	},
	{
		id: 'vibpre',
		group: 'vib',
		name: 'VIB - Premire Boundless',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-premier-boundless&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 20000000,
			cities: vibAllowCity,
			demands: 'Tích dặm bay'
		},
		info: {
			image: '/credit-card/vibpre-card.png',
			creditLimt: '100',
			specialFeatures: 'Tích lũy dặm VNA'
		}
	},
	{
		id: 'vibsup',
		group: 'vib',
		name: 'VIB - Super Card',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-supercard&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}-&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 10000000,
			cities: vibAllowCity,
			demands: 'Tích dặm bay'
		},
		info: {
			image: '/credit-card/vibsup-card.png',
			creditLimt: '100',
			specialFeatures:
				'Hoàn linh hoạt đến 15% chi tiêu Mua sắm, Du lịch, Ăn uống'
		}
	},
	{
		id: 'vibonl',
		group: 'vib',
		name: 'VIB - Super Card',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-onlineplus-2in1&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}-&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 7000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/vibonl-card.png',
			creditLimt: '100',
			specialFeatures: 'Hoàn đến 6% cho chi tiêu trực tuyến'
		}
	},
	{
		id: 'vibcas',
		group: 'vib',
		name: 'VIB - Cash Back',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-cashback&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 15000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/vibcas-card.png',
			creditLimt: '100',
			specialFeatures: 'Hoàn đến 24 triệu điểm thưởng/năm'
		}
	},
	{
		id: 'vibfam',
		group: 'vib',
		name: 'VIB - Family Link',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-family-link&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 15000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/vibfam-card.png',
			creditLimt: '100',
			specialFeatures: 'Hoàn đến 10% cho chi tiêu Giáo dục, Y tế, Bảo hiểm'
		}
	},
	{
		id: 'vibfin',
		group: 'vib',
		name: 'VIB - Financial Free',
		link: code =>
			`https://wwww.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-financial-free&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 7000000,
			cities: vibAllowCity,
			demands: 'Miễn lãi'
		},
		info: {
			image: '/credit-card/vibfin-card.png',
			creditLimt: '100',
			specialFeatures: 'Rút tiền không giới hạn đến 100% hạn mức'
		}
	},
	{
		id: 'viblaz',
		group: 'vib',
		name: 'VIB - Lazcard',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-lazcard&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 15000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/viblaz-card.png',
			creditLimt: '100',
			specialFeatures: 'Hoàn đến 6% chi tiêu tại LAZADA'
		}
	},
	{
		id: 'vibrew',
		group: 'vib',
		name: 'VIB - Reward Unlimited',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-rewards-unlimited&utm_source=REFERCARD&utm_medium=REFER_CARD&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 10000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/vibrew-card.png',
			creditLimt: '100',
			specialFeatures: 'Tặng điểm không giới hạn đến 10 lần cho mọi giao dịch'
		}
	},
	{
		id: 'vibivy',
		group: 'vib',
		name: 'VIB - Ivy Card',
		link: code =>
			`https://www.vib.com.vn/vn/the-tin-dung/dang-ky/buoc-1?card_type=vib-ivycard&utm_source=Public_Website&utm_medium=Affiliate_FIMIVIB-${code}&utm_content=Affiliate_FIMIVIB-${code}`,
		condition: {
			age: 20,
			income: 5000000,
			cities: vibAllowCity,
			demands: 'Hoàn tiền'
		},
		info: {
			image: '/credit-card/vibivy-card.png',
			creditLimt: '100',
			specialFeatures: '1% tích điểm hoàn tiền tất cả giao dịch chi tiêu'
		}
	}
] satisfies CardType[]
