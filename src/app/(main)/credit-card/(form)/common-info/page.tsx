import CommonInfoScreen from '@/features/credit-card/common-info/components/screen'

type SearchParams = { code: string; product: string }

const HomePage = ({ searchParams }: { searchParams: SearchParams }) => {
	return <CommonInfoScreen {...searchParams} />
}

export default HomePage
