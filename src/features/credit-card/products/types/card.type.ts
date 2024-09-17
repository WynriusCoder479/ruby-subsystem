export type CardType = {
	id: string
	name: string
	group: 'vp' | 'hdn' | 'vib' | 'tp'
	image: string
	condition: {
		age: number
		cities: 'all' | string[]
		income: number
		demands: string[]
		papers: string[]
	}
}
