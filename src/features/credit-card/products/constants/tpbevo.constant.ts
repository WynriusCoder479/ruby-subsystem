import { CardType } from '@/features/credit-card/products/types/card.type'

export const tpbevoAllowCity = [
	'Lâm Đồng',
	'Bình Định',
	'Tây Ninh',
	'Đắk Lắk',
	'Thành phố Hồ Chí Minh',
	'Hà Nội',
	'Đà Nẵng',
	'Bà Rịa - Vũng Tàu',
	'Khánh Hòa',
	'Bình Dương',
	'Đồng Nai',
	'Cần Thơ',
	'Hải Phòng',
	'An Giang',
	'Bắc Ninh',
	'Thanh Hóa',
	'Quảng Ninh',
	'Tiền Giang',
	'Kiên Giang',
	'Lào Cai',
	'Nghệ An',
	'Long An',
	'Thái Nguyên',
	'Bình Phước',
	'Quảng Nam',
	'Thừa Thiên Huế',
	'Hưng Yên',
	'Vĩnh Phúc',
	'Thái Bình',
	'Bắc Giang'
]

export const tbpevo = [
	{
		id: 'tbpevo',
		name: 'TPBank EVO',
		group: 'tp',
		link: code =>
			`https://evocard.tpb.vn/?utm_source=avay_afffimi&utm_campaign=First&utm_medium=${code}`,
		condition: {
			age: 22,
			income: 7000000,
			demands: 'Hoàn tiền',
			cities: tpbevoAllowCity
		},
		info: {
			specialFeatures: 'Hoàn tiền đến 10% giao dịch trực tuyến',
			creditLimt: '50',
			image: '/credit-card/tp-evo-card.png'
		}
	}
] satisfies CardType[]
