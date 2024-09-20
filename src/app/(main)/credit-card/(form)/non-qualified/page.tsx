import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const NonQualifiedPage = () => {
	return (
		<Card className="w-[400px] border border-foreground/20 shadow-2xl">
			<CardHeader>
				<CardTitle className="text-center text-2xl uppercase">
					Tiếp nhận thông tin
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-4">
					<div className="flex w-full items-center justify-center p-4">
						<Image
							src="/received.png"
							alt="img"
							width={1000}
							height={1000}
							className="size-52"
						/>
					</div>
					<p className="text-justify text-lg font-semibold tracking-tight">
						Chúng tôi đã tiếp nhận và ghi nhớ thông tin của bạn. Chúng tôi sẽ
						liên hệ với bạn ngay khi có sản phẩm phù hợp nhất với bạn.
					</p>
					<Button
						size="lg"
						className="mt-4 text-lg font-bold"
					>
						<Link
							href="https://www.ruby-agency.vn/trang-chu"
							target="_blank"
						>
							Ghé thăm trang chủ của chúng tôi
						</Link>
					</Button>
					<div className="mt-4 w-full">
						<p className="text-center text-xs opacity-70">
							Công ty TNHH Tiếp thị và Truyền thông RUBY
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default NonQualifiedPage
