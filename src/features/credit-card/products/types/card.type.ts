export type CardType = {
	id: string
	name: string
	group: 'vp' | 'hdb' | 'vib' | 'tp'
	link: (code: string) => string
	condition: {
		age: number
		cities: 'all' | string[]
		income: number
		demands:
			| 'Hoàn tiền'
			| 'Tích điểm'
			| 'Tích dặm bay'
			| 'Giao dịch ngoại tệ'
			| 'Miễn lãi'
	}
	info: {
		creditLimt: string
		specialFeatures: string
		image: string
	}
}
