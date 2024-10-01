import DialogWrapper from '@/components/common/dialog-wrapper'
import { Button } from '@/components/ui/button'

const TermPolicy = () => {
	return (
		<DialogWrapper
			title="ĐIỀU KHOẢN SỬ DỤNG"
			trigger={
				<Button
					variant="link"
					className="p-0"
				>
					- Điều khoản sử dụng dịch vụ RUBY;
				</Button>
			}
		>
			<div className="flex flex-col gap-2 text-justify text-xs">
				<p>
					Chào mừng bạn đến với trang web RUBY.tech và/hoặc ứng dụng RUBY trên
					thiết bị di động. Các Điều kiện & Điều Khoản Sử Dụng (sau đây gọi là
					“Điều Khoản Chung”) điều chỉnh việc bạn sử dụng và truy cập Nền Tảng
					RUBY (như được định nghĩa dưới đây) và việc sử dụng bất kỳ phần nào
					của Dịch Vụ (như được định nghĩa dưới đây). Bằng cách truy cập vào Nền
					Tảng RUBY và/hoặc sử dụng Dịch Vụ, bạn đồng ý rằng bạn đã đọc, hiểu và
					chịu sự ràng buộc bởi các quy định của Điều Khoản Chung này, qua đó
					cấu thành một thỏa thuận pháp lý giữa bạn và RUBY (như được định nghĩa
					dưới đây). Nếu bạn không đồng ý với các Điều Khoản Chung này, vui lòng
					không truy cập và/hoặc sử dụng Nền Tảng RUBY hoặc sử dụng bất kỳ phần
					nào của Dịch Vụ.
				</p>
				{/* 1 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="2 mb-1 font-bold">
						1. Định nghĩa trong Điều Khoản Chung này, các từ và thuật ngữ sau
						đây sẽ có nghĩa dưới đây trừ khi ngữ cảnh có yêu cầu khác:
					</p>
					<p>
						1.1 Công Ty: được hiểu là Công ty TNHH Công Nghệ RUBY (Mã số doanh
						nghiệp 0317497609) và các công ty con, công ty liên kết khác có liên
						quan đến phạm vi cung cấp Dịch Vụ cho Người Dùng, trừ khi được định
						nghĩa khác đi tại bản Điều Khoản Sử Dụng này.
					</p>
					<p>
						1.2 Dịch Vụ: là các sản phẩm, dịch vụ do Công Ty và/hoặc các Đối Tác
						sáng tạo ra và cung cấp tới Người Dùng trên Nền Tảng RUBY thông qua
						hoạt động hợp tác kinh doanh giữa các Đối Tác và Công Ty theo quy
						định tại hợp đồng hợp tác kinh doanh
					</p>
					<p>
						1.3 Đối Tác: là các doanh nghiệp có uy tín trên thị trường, chuyên
						cung cấp các sản phẩm dịch vụ thuộc các lĩnh vực kinh doanh được
						pháp luật cho phép và cung cấp tới Người Dùng thông qua Nền Tảng
						RUBY. Để làm rõ, Đối Tác bao gồm nhưng không giới hạn Đối Tác Tài
						Chính, các công ty viễn thông/công ty công nghệ thông tin được đề
						cập và định nghĩa trong Điều Khoản Sử Dụng này.
					</p>
					<p>
						1.4 Điều Khoản Sử Dụng hoặc Điều Khoản Chung: được hiểu là bản Điều
						khoản sử dụng Nền Tảng RUBY này, bao gồm các điều khoản, điều kiện
						để Người Dùng sử dụng Dịch Vụ và Nền TảngFIMI được quy định tại đây.
					</p>
					<p>
						1.5 Nền Tảng RUBY: là nền tảng tiêu dùng RUBY thuộc sở hữu và được
						phát triển bởi Công ty TNHH Công Nghệ RUBY và các công ty con mà
						thông qua đó Người Dùng có thể sử dụng Dịch Vụ do Công Ty và/hoặc
						Đối Tác của Công Ty cung cấp. Người Dùng có thể sử dụng Nền Tảng
						RUBY thông qua các phương thức sau:
					</p>
					<ul className="space-y-1 px-2">
						<li>- Phiên bản Website: ruby.tech</li>
						<li>- Phiên bản Ứng dụng RUBY trên thiết bị di động</li>
						<li>
							- Các phiên bản khác được phát triển, bổ sung bởi Công Ty và sẽ
							được cập nhật tại Điều Khoản Sử Dụng này tùy từng thời điểm.
						</li>
					</ul>
					<p>
						1.6 Người Dùng: bao gồm bất kỳ cá nhân nào trên 18 tuổi đã đăng ký
						hoặc sử dụng Dịch Vụ tại Nền Tảng RUBY theo Điều Khoản Sử Dụng này.
					</p>
					<p>
						1.7 Tài Khoản RUBY: là tài khoản điện tử trên hệ thống công nghệ
						thông tin của RUBY do Người Dùng tạo lập và quản lý thông qua nhiều
						hình thức khác nhau, bao gồm nhưng không giới hạn bởi ứng dụng trên
						điện thoại di động, website, và các hình thức khác để truy cập, sử
						dụng Dịch Vụ, do RUBY cung cấp.
					</p>
					<p>
						1.8 Pháp Luật có nghĩa các quy định pháp luật của nước Cộng Hòa Xã
						Hội Chủ Nghĩa Việt Nam như Luật, Bộ luật, Pháp lệnh, Nghị định,
						Thông tư, quy chuẩn, quy tắc, quyết định hành chính của cơ quan nhà
						nước có thẩm quyền và các quy định có hiệu lực pháp luật khác tại
						từng thời điểm.
					</p>
					<p>
						1.9 Dịch Vụ Khác là các sản phẩm, dịch vụ không phải Dịch Vụ mà
						Người Dùng được hỗ trợ tiếp cận trên Nền Tảng RUBY và được cung cấp
						bởi bên thứ ba là các Đối Tác của Công Ty. Việc Người Dùng sử dụng
						Dịch Vụ Khác trên Nền Tảng RUBY sẽ tuân theo chính sách, thoả thuận
						riêng giao kết giữa Người Dùng và Đối Tác.
					</p>
					<p>
						1.10 Thông Tin Cá Nhân là bất kỳ thông tin, dữ liệu nào có thể được
						sử dụng để nhận dạng Người Dùng hoặc dựa vào đó mà Người Dùng được
						xác định và liên quan đến hoặc xuất phát từ việc Người Dùng sử dụng
						Dịch Vụ, bao gồm nhưng không giới hạn các dữ liệu như tên, quốc
						tịch, số điện thoại,, sở thích cá nhân, vân tay, địa chỉ email, địa
						điểm, hình ảnh, thông tin CMND/thẻ căn cước công dân, ngày sinh,
						tình trạng hôn nhân, thông tin bảo hiểm, thông tin giao dịch, lịch
						sử truy cập, hành trình khách hàng RUBY.
					</p>
					<p>
						1.11 Giao Dịch: là bất kỳ giao dịch nào của Người Dùng liên quan đến
						việc sử dụng Dịch Vụ được cung cấp bởi Công Ty.
					</p>
					<p>
						1.12 Điểm Giao Dịch: là các địa điểm của các Điểm Giao Dịch với RUBY
						về việc giới thiệu Người Dùng sử dụng Dịch Vụ được cung cấp trên Nền
						Tảng RUBY; Danh sách Điểm GiaoDịch được liệt kê trên Nền tảng RUBY.
					</p>
					<p>
						1.13 Biện Pháp Xác Thực: là các yếu tố xác thực mà RUBY sử dụng để
						xác thực định danh Người Dùng khi sử dụng Nền tảng RUBY và các Dịch
						Vụ được cung cung trên nền tảng bao gồm nhưng không giới hạn mật
						khẩu sử dụng một lần (One-Time Password), mật khẩu, đặc điểm sinh
						trắc học và các biện pháp xác thực khác được phép thực hiện theo quy
						định Pháp Luật
					</p>
					<p>
						1.14 Dịch Vụ Khách Hàng: nghĩa là dịch vụ chăm sóc khách hàng của
						RUBY, được cung cấp theo địa chỉ email cs_fintech@RUBY.tech
					</p>
					<p>
						1.15 Quy Định Pháp Luật: bao gồm toàn bộ các quy định pháp luật của
						nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam như Luật, Bộ luật, Pháp
						lệnh, Nghị định, Thông tư, quy chuẩn, quy tắc, quyết định hành chính
						của cơ quan nhà nước có thẩm quyền và các quy định có hiệu lực pháp
						luật khác tại từng thời điểm.
					</p>
					<p>
						1.16 Ngày Làm Việc: là các ngày từ Thứ Hai đến Thứ Sáu, không bao
						gồm ngày nghỉ, lễ, Tết theo Quy Định Pháp Luật.
					</p>
				</div>
				{/* 2 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">2. Các Quy Tắc Chung</p>
					<p>
						2.1 Bằng việc truy cập, tải về Ứng Dụng RUBY, Người Dùng xác nhận đã
						hiểu rõ các Điều Khoản Chung và hoàn toàn đồng ý với từng phần cũng
						như toàn bộ các điều khoản và điều kiện được quy định tại đây, cũng
						như bất kỳ các điều chỉnh liên quan và chấp nhận rằng việc bắt đầu
						sử dụng hoặc tiếp tục sử dụng Dịch Vụ sẽ chịu sự điều chỉnh của
						những Điều Khoản Chung này.
					</p>
					<p>
						2.2 Bằng việc truy cập, tải về và sử dụng Ứng Dụng RUBY, Người Dùng
						thừa nhận và đồng ý rằng đã chấp thuận với các phương thức, yêu cầu,
						và/hoặc chính sách được quy định trong Điều Khoản Chung này, và rằng
						Người Dùng theo đây đồng ý cho RUBY thu thập, sử dụng, lưu trữ, tiết
						lộ, xử lý Thông Tin Cá Nhân của Người Dùng cho các mục đích tại Điều
						Khoản Chung này.
					</p>
					<p>
						2.3 Nếu Người Dùng không đồng ý cho phép RUBY thu thập, xử lý, sử
						dụng, tiết lộ và lưu trữ Dữ Liệu Người Dùng của mình như quy định
						trong Điều Khoản Chung này, Người Dùng vui lòng không/ ngừng sử dụng
						các Dịch Vụ và ngừng truy cập Nền Tảng RUBY.
					</p>
					<p>
						2.4 RUBY có quyền thay đổi những Điều Khoản Chung này hoặc bất kỳ
						tính năng nào của Dịch Vụ vào bất kỳ thời điểm nào. Thay đổi đó sẽ
						có hiệu lực ngay lập tức sau khi công bố thay đổi của các Điều Khoản
						Chung hoặc tính năng tại Ứng Dụng RUBY.
					</p>
					<p>
						2.5 Người Dùng đồng ý đánh giá những Điều Khoản Chung này định kỳ để
						đảm bảo rằng Người Dùng đã được cập nhật đối với bất kỳ các thay đổi
						hoặc sửa đổi đối với những Điều Khoản Chung này. Việc Người Dùng
						tiếp tục sử dụng Dịch Vụ sẽ được xem là Người Dùng chấp nhận hoàn
						toàn các Điều Khoản Chung được thay đổi.
					</p>
					<p>
						2.6 Người Dùng đảm bảo rằng Người Dùng đã hiểu rõ các hướng dẫn và
						quy trình sử dụng Dịch Vụ của RUBY và những thay đổi, bổ sung (nếu
						có) của RUBY.
					</p>
				</div>
				{/* 3 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">3. Đăng Ký/ Ngưng sử dụng Dịch Vụ</p>
					<p>3.1 Đăng Ký sử dụng Dịch vụ</p>
					<ul className="space-y-1 px-2">
						<li>
							a. Để sử dụng Dịch Vụ, trước hết Người Dùng cần tải Ứng Dụng RUBY,
							đăng ký và/hoặc đăng nhập Tài Khoản RUBY và làm theo hướng dẫn.
						</li>
						<li>
							b. Người Dùng đồng ý cung cấp cho RUBY hoặc các Điểm Giao Dịch của
							RUBY đầy đủ các thông tin, cập nhật và chính xác liên quan đến
							Người Dùng mà RUBY sẽ yêu cầu vào từng thời điểm để sử dụng Dịch
							Vụ. Người Dùng đồng ý thông báo ngay cho RUBY hoặc các Điểm Giao
							Dịch của RUBY bất kỳ thay đổi nào về Tài Khoản RUBY và các thông
							tin đã được cung cấp cho RUBY. Người Dùng tuyên bố và bảo đảm rằng
							các thông tin của Người Dùng và các thông tin khác được cung cấp
							cho RUBY là trung thực và chính xác và chịu trách nhiệm đối với
							các thông tin đã cung cấp trên Ứng Dụng RUBY.
						</li>
						<li>
							<div className="flex flex-col gap-2">
								<p>
									c. Theo yêu cầu của RUBY, Người Dùng sẽ cung cấp cho RUBY các
									thông tin liên quan đến việc sử dụng Dịch Vụ mà RUBY có thể
									yêu cầu một cách hợp lý cho các mục đích sau đây:
								</p>
								<ul className="space-y-2 pl-2">
									<li>
										- Trợ giúp RUBY tuân thủ các nghĩa vụ của mình theo quy định
										Pháp Luật;
									</li>
									<li>
										- Báo cáo các cơ quan hữu quan hoặc các cơ quan chính phủ về
										việc tuân thủ những nghĩa vụ đó;
									</li>
									<li>
										- Đánh giá việc Người Dùng đã tuân thủ, đang tuân thủ và có
										thể tiếp tục tuân thủ tất cả các nghĩa vụ của mình theo
										những Điều Khoản Chung này hay không.
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="flex flex-col gap-2">
								<p>d. Người Dùng được sử dụng Tài Khoản RUBY của mình để:</p>
								<ul className="space-y-2 pl-2">
									<li>- Quản lý Thông Tin Cá Nhân; và/hoặc</li>
									<li>
										- Sử dụng các Dịch Vụ được cung cấp trên Nền Tảng RUBY, dịch
										vụ hợp pháp; và/hoặc
									</li>
									<li>
										- Xem, nhận và sử dụng ưu đãi từ RUBY và/hoặc từ các Đối
										Tác; và/hoặc
									</li>
									<li>
										- Sử dụng Dịch Vụ bao gồm nhưng không giới hạn giải pháp
										công nghệ thanh toán bằng Tài Khoản RUBY đã được Người Dùng
										liên kết và xác thực về thẻ tín dụng của Người Dùng (là chủ
										thẻ tín dụng) tại ngân hàng; và/ hoặc
									</li>
									<li>- Xem lịch sử giao dịch qua Ứng dụng RUBY.</li>
								</ul>
							</div>
						</li>
						<li>
							f. Người Dùng cam kết không sử dụng Dịch Vụ cho bất kỳ mục đích
							hoặc liên quan đến bất kỳ hành động vi phạm các Quy Định Pháp
							Luật, bao gồm, nhưng không giới hạn, các luật và quy định liên
							quan đến phòng, chống rửa tiền, chống tài trợ khủng bố.
						</li>
						<li>
							g. Người Dùng xác nhận và công nhận rằng Người Dùng có đầy đủ năng
							lực hành vi, quyền hạn hoặc thẩm quyền để sử dụng Dịch Vụ.
						</li>
						<li>
							h. Người Dùng sẽ chịu trách nhiệm quản lý tài khoản, mật khẩu tài
							khoản, các thông tin liên quan đến tài khoản, Biện Pháp Xác Thực,
							thông tin thiết bị, thiết bị của mình. Nếu thông tin các thông tin
							trên của Người Dùng bị mất hoặc bị lấy cắp hoặc bị tiết lộ một
							cách bất hợp pháp, thì Người Dùng phải thay đổi thông tin tài
							khoản bằng cách sử dụng các công cụ được cài đặt sẵn trong Ứng
							Dụng RUBY hoặc thông báo ngay cho RUBY thông qua Dịch Vụ Khách
							Hàng để tạm ngưng Tài Khoản RUBY. Người Dùng sẽ hoàn toàn chịu
							trách nhiệm về bất kỳ và tất cả yêu cầu Giao Dịch đã xảy ra trước
							khi RUBY nhận được thông báo đó. Người Dùng lưu ý rằng Tài Khoản
							RUBY sẽ chỉ tạm thời ngừng khi Người Dùng đã cung cấp mọi thông
							tin được yêu cầu cho Dịch Vụ Khách Hàng mà Dịch Vụ Khách Hàng có
							thể yêu cầu một cách hợp lý.
						</li>
						<li>
							k. Khi sử dụng Dịch Vụ, Người Dùng chịu trách nhiệm về bất kỳ và
							tất cả hành động cũng như sai sót của mình trong việc sử dụng Ứng
							Dụng RUBY và/hoặc thực hiện giao dịch. Nếu bất kỳ một sai sót hay
							sự cố nào xảy ra, Người Dùng phải liên hệ ngay với Dịch Vụ Khách
							Hàng để được hướng dẫn. RUBY sẽ nỗ lực hết sức để tư vấn và trợ
							giúp Người Dùng.
						</li>
						<li>
							l. Trong trường hợp có sự cố về Dịch Vụ hoặc nếu một giao dịch
							không được thực hiện theo yêu cầu của Người Dùng, Người Dùng sẽ
							thông báo ngay cho RUBY về sự cố đó và RUBY sẽ nỗ lực hết sức để
							tư vấn và trợ giúp Người Dùng. m. RUBY đồng ý, trên cơ sở toàn
							quyền quyết định bồi hoàn cho bất kỳ giao dịch nào đã được thực
							hiện sai do lỗi của RUBY.
						</li>
					</ul>
					<p>3.2 Ngưng Sử Dụng Dịch Vụ</p>
					<ul className="space-y-1 px-2">
						<li>
							<div className="flex flex-col gap-2">
								<p>a. RUBY ngừng, chấm dứt và hủy bỏ Dịch Vụ:</p>
								<ul className="space-y-1 pl-2">
									<li>
										- Người Dùng đồng ý, xác nhận và chấp thuận rằng Dịch Vụ
										(hoặc bất kỳ phần nào của Dịch Vụ) có thể được RUBY hủy bỏ
										vì bất kỳ lý do nào mà RUBY thấy là phù hợp và cần thiết vào
										bất kỳ thời điểm nào mà không cần thông báo trước cho Người
										Dùng. Người Dùng cũng đồng ý rằng bất kỳ lý do hủy bỏ nào mà
										RUBY đưa ra sẽ được Người Dùng xem là lý do hợp lý. Sau khi
										hủy bỏ, RUBY có thể xem xét cung cấp lại Dịch Vụ (hoặc bất
										kỳ phần nào của Dịch Vụ) trên cơ sở RUBY đánh giá là phù
										hợp.
									</li>
									<li>
										- Người Dùng đồng ý, xác nhận và chấp thuận rằng vào mọi
										thời điểm RUBY có quyền ngừng hoặc chấm dứt Tài Khoản của
										Người Dùng hoặc khả năng tiếp cận và sử dụng Dịch Vụ (hoặc
										bất kỳ phần nào của Dịch Vụ) của Người Dùng vì bất kỳ lý do
										nào mà RUBY thấy là phù hợp và cần thiết, bao gồm, nhưng
										không giới hạn trường hợp Người Dùng vi phạm bất kỳ quy định
										nào của những Điều Khoản Chung này hoặc làm trái hoặc vi
										phạm bất kỳ quy định, luật hiện hành liên quan đến việc sử
										dụng Dịch Vụ. Người Dùng cũng đồng ý rằng bất kỳ lý do hủy
										bỏ nào do RUBY đưa ra sẽ được Người Dùng xem là hợp lý. Việc
										tạm ngừng cung cấp Dịch Vụ có thể được thực hiện trong bất
										kỳ thời điểm nào và theo bất kỳ điều kiện nào mà RUBY trên
										cơ sở toàn quyền quyết định thấy là phù hợp.
									</li>
									<li>
										- Nếu Người Dùng vi phạm bất kỳ quy định nào của Điều Khoản
										Chung này hoặc làm trái hoặc vi phạm bất kỳ quy định, Quy
										Định Pháp Luật liên quan đến việc sử dụng Dịch Vụ, RUBY có
										quyền ngừng Dịch Vụ thông báo cho cơ quan nhà nước có thẩm
										quyền và/hoặc các cá nhân, tổ chức liên quan về việc làm
										trái hoặc vi phạm theo cách thức phù hợp. Sau khi hủy bỏ
										hoặc chấm dứt Dịch Vụ (hoặc bất kỳ phần nào của Dịch Vụ):
									</li>
									<li>
										- Tất cả các quyền đã được trao cho Người Dùng theo những
										Điều Khoản Chung này sẽ chấm dứt ngay lập tức;
									</li>
									<li>
										- Người Dùng phải thanh toán ngay cho RUBY mọi khoản phí và
										lệ phí chưa trả đến hạn và còn nợ RUBY (nếu có);
									</li>
									<li>
										- Người Dùng tại đây ủy quyền không hủy ngang và vô điều
										kiện cho RUBY gửi yêu cầu đến Đối Tác để khấu trừ mọi khoản
										tiền (bao gồm, nhưng không giới hạn các khoản phí và lệ phí)
										đến hạn thanh toán và còn nợ RUBY (nếu có) bởi Người Dùng
										tại hạn mức thẻ tín dụng đã liên kết với Tài Khoản RUBY.
									</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="flex flex-col gap-1">
								<p>b. Người Dùng chấm dứt sử dụng Dịch Vụ:</p>
								<p>
									Người Dùng có thể chấm dứt việc sử dụng Dịch Vụ của mình căn
									cứ theo những Điều Khoản Chung này vào bất kỳ thời điểm nào
									bằng cách đến các Điểm Giao Dịch của RUBY hoặc liên hệ với
									Dịch Vụ Khách Hàng để được hướng dẫn.
								</p>
								<ul className="space-y-1 pl-2">
									<li>
										- Sau khi hủy bỏ hoặc chấm dứt sử dụng Dịch Vụ (hoặc bất kỳ
										phần nào của Dịch Vụ):
									</li>
									<li>
										- Tất cả các quyền đã được trao cho Người Dùng theo những
										Điều Khoản Chung này liên quan đến Dịch Vụ đã chấm dứt sẽ
										chấm dứt ngay lập tức;
									</li>
									<li>
										- Người Dùng phải thanh toán ngay cho RUBY mọi khoản phí và
										lệ phí chưa trả đến hạn và còn nợ RUBY liên quan đến Dịch Vụ
										đã chấm dứt (nếu có);
									</li>
									<li>
										- Trong trường hợp tất cả các Dịch Vụ đều đã được chấm dứt,
										Người Dùng tại đây ủy quyền không hủy ngang và vô điều kiện
										cho RUBY gửi yêu cầu đến Đối Tác để khấu trừ mọi khoản tiền
										(bao gồm, nhưng không giới hạn các khoản phí và lệ phí) đến
										hạn thanh toán và còn nợ RUBY (nếu có) bởi Người Dùng tại
										hạn mức thẻ tín dụng đã liên kết với Tài Khoản RUBY.
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				{/* 4 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">4. Quyền sở hữu trí tuệ</p>
					<p>
						4.1. Tất cả các nhãn hiệu hàng hóa, logo, nhãn hiệu dịch vụ và tất
						cả các quyền sở hữu trí tuệ khác thuộc bất kỳ loại nào (cho dù đã
						được đăng ký hay chưa), và tất cả các nội dung thông tin, thiết kế,
						tài liệu, đồ họa, phần mềm, hình ảnh, video, âm nhạc, âm thanh, phức
						hợp phần mềm, mã nguồn và phần mềm cơ bản liên quan đến RUBY (gọi
						chung là “Quyền Sở Hữu Trí Tuệ”) là tài sản và luôn luôn là tài sản
						của RUBY và các tổ chức/đại lý khác được ủy quyền bởi RUBY (nếu có).
						Tất cả các Quyền Sở Hữu Trí Tuệ được bảo hộ bởi Quy Định Pháp Luật
						về bản quyền và các công ước quốc tế. Tất cả các quyền đều được bảo
						lưu.
					</p>
					<p>
						4.2. Ngoại trừ được cho phép rõ ràng trong những Điều Khoản Chung
						này, Người Dùng không được sử dụng, biên tập, công bố, mô phỏng,
						dịch, thực hiện các sản phẩm phái sinh từ, phân phát hoặc bằng cách
						khác sử dụng, tái sử dụng, sao chép, sửa đổi, hoặc công bố Quyền Sở
						Hữu Trí Tuệ theo bất kỳ cách thức nào mà không có sự chấp thuận
						trước bằng văn bản của RUBY. Người Dùng không được trợ giúp hoặc tạo
						điều kiện cho bất kỳ bên thứ ba nào sử dụng Quyền Sở Hữu Trí Tuệ
						theo bất kỳ cách thức nào mà cấu thành một vi phạm về sở hữu trí tuệ
						và/hoặc đối với các quyền liên quan khác của RUBY.
					</p>
				</div>
				{/* 5 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">Bồi hoàn</p>
					<p>
						Người Dùng đồng ý bồi hoàn cho RUBY và các bên liên quan của RUBY và
						đảm bảo cho họ không bị thiệt hại bởi mọi tổn thất, khiếu nại, yêu
						cầu, khiếu kiện, thủ tục tố tụng, chi phí (bao gồm, nhưng không giới
						hạn, các chi phí pháp lý) và các trách nhiệm có thể phải gánh chịu
						hoặc đưa ra đối với RUBY và/hoặc các nhân viên, cán bộ... của RUBY
						phát sinh từ hoặc liên quan đến:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							- Việc Người Dùng sử dụng Dịch Vụ (hoặc bất kỳ phần nào của Dịch
							Vụ);
						</li>
						<li>- Việc Người Dùng vi phạm những Điều Khoản Chung này.</li>
					</ul>
				</div>
				{/* 6 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">6. Tiết Lộ Thông Tin</p>
					<p>
						6.1 Người Dùng đồng ý rằng RUBY có thể thu thập, lưu trữ, sử dụng,
						xử lý và cung cấp các thông tin về Tài Khoản RUBY cũng như các thông
						tin khác từ Người Dùng hoặc các bên thứ ba để phục vụ cho mục đích
						nhận biết khách hàng và xác thực theo quy định Pháp Luật. RUBY cũng
						có thể thu thập, lưu trữ, sử dụng và xử lý thông tin cá nhân của
						Người Dùng cho mục đích nghiên cứu và phân tích hoạt động và cải
						tiến Dịch Vụ.
					</p>
					<p>
						6.2 Khi Người Dùng đăng ký một Tài Khoản RUBY để sử dụng Dịch Vụ,
						Người Dùng hiểu và đồng ý cấp quyền cho RUBY thu thập, lưu giữ, sử
						dụng và xử lý thông tin thông qua việc truy cập vào các ứng dụng sau
						trên thiết bị di động theo những Điều Khoản Chung này.
					</p>
					<ul className="space-y-2 pl-2">
						<li>
							- Vị trí: lấy thông tin về vị trí để hiển thị danh sách các Điểm
							Giao Dịch gần nhất.
						</li>
						<li>
							- Trạng thái kết nối: để đảm bảo các tính năng trực tuyến của Ứng
							Dụng RUBY hoạt động đúng.
						</li>
						<li>- Máy chụp hình: cho phép Người Dùng dùng để quét mã QR.</li>
					</ul>
					<p>
						6.3 Người Dùng chấp thuận, ủy quyền không hủy ngang và vô điều kiện
						cho RUBY tiết lộ hoặc công bố các thông tin liên quan đến Người Dùng
						hoặc các Giao Dịch của Người Dùng với các cá nhân hoặc tổ chức mà
						RUBY có thể được yêu cầu tiết lộ theo bất kỳ Quy Định Pháp Luật hoặc
						quy định nào áp dụng đối với RUBY hoặc căn cứ theo bất kỳ yêu cầu
						hoặc lệnh nào của bất kỳ cơ quan nhà nước có thẩm quyền nào hoặc
						lệnh của tòa án.
					</p>
				</div>
				{/* 7 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">7. Giới Hạn Trách Nhiệm</p>
					<p>
						7.1 Trong mọi trường hợp RUBY (bao gồm cả các nhân viên, Điểm Giao
						Dịch, cán bộ hoặc các bên liên kết của RUBY) sẽ không chịu trách
						nhiệm đối với Người Dùng về bất kỳ tổn thất, thiệt hại, trách nhiệm
						và chi phí nào theo bất kỳ nguyên nhân hành động nào gây ra bởi việc
						sử dụng, hoặc không có khả năng sử dụng Dịch Vụ trừ khi RUBY (bao
						gồm cả các nhân viên, Điểm Giao Dịch, cán bộ hoặc các bên liên kết
						của RUBY) có lỗi trong việc để xảy ra tổn thất, thiệt hai.
					</p>
					<p>
						7.2 Tuy nhiên, trong trường hợp RUBY (bao gồm cả các nhân viên, Điểm
						Giao Dịch, cán bộ hoặc các bên liên kết của RUBY) phải chịu trách
						nhiệm về các tổn thất hoặc thiệt hại theo quy định nêu trên đây, thì
						Người Dùng đồng ý rằng toàn bộ trách nhiệm của RUBY (bao gồm cả các
						nhân viên, Điểm Giao Dịch, cán bộ hoặc các bên liên kết của RUBY) sẽ
						được giới hạn ở số tiền thực tế của các thiệt hại trực tiếp phải
						gánh chịu bởi Người Dùng và trong bất kỳ trường hợp nào sẽ không
						vượt quá tổng số tiền được chuyển vào và chuyển ra từ Tài Khoản RUBY
						của Người Dùng.
					</p>
					<p>
						7.3 Trong mọi trường hợp RUBY sẽ không chịu trách nhiệm về bất kỳ
						thiệt hại gián tiếp, đặc biệt, do hệ quả hoặc sự kiện ngẫu nhiên nào
						phát sinh hoặc bắt nguồn từ việc sử dụng, hoặc không có khả năng sử
						dụng Dịch Vụ.
					</p>
					<p>
						7.4 Trong phạm vi mà Quy Định Pháp Luật cho phép, Người Dùng đồng ý
						rằng RUBY (bao gồm cả các nhân viên, Điểm Giao Dịch, cán bộ hoặc các
						bên liên kết của RUBY) sẽ không chịu trách nhiệm về bất kỳ tổn thất,
						thiệt hại, trách nhiệm và/hoặc chi phí nào mà Người Dùng phải gánh
						chịu do việc Người Dùng hoặc một bên thứ ba khác truy cập trái phép
						vào máy chủ, giao diện của RUBY, trang Web của RUBY, thiết bị
						và/hoặc dữ liệu của Người Dùng dù là vô tình hoặc bằng cách thức
						không hợp pháp hoặc không được phép như xâm nhập trái phép hoặc các
						lý do khác nằm ngoài tầm kiểm soát của RUBY (ví dụ như vi rút máy
						tính).
					</p>
					<p>
						7.5 RUBY sẽ không chịu trách nhiệm về việc không thực hiện hoặc chậm
						thực hiện các nghĩa vụ của mình theo những Điều Khoản Chung này do
						các sự kiện bất khả kháng nằm ngoài tầm kiểm soát hợp lý của RUBY,
						bao gồm, nhưng không giới hạn, thiên tai, bão tố, mưa dông, bùng nổ
						vi rút, các hạn chế của chính phủ, đình công, chiến tranh, hỏng mạng
						hoặc hỏng mạng viễn thông hoặc các sự kiện bất khả kháng khác theo
						quy định của pháp luật hoặc được công nhận bởi hai bên.
					</p>
				</div>
				{/* 8 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">An Ninh</p>
					<p>
						8.1 Người Dùng cam kết sẽ chỉ sử dụng Ứng Dụng RUBY và Tài Khoản
						RUBY cho các hoạt động hợp pháp, không thực hiện các giao dịch thanh
						toán, chuyển tiền bất hợp pháp, bao gồm nhưng không giới hạn các
						hành vi đánh bạc,thanh toán các hàng hóa, dịch vụ bất hợp pháp hay
						rửa tiền, và sẽ thông báo ngay lập tức cho RUBY về (các) giao dịch
						có dấu hiệu sử dụng trái phép Tài Khoản RUBY của Người Dùng và/hoặc
						Dịch Vụ đã biết hoặc nghi vấn, hoặc bất kỳ vi phạm an ninh nào đã
						biết hoặc nghi vấn, kể cả việc mất thông tin, lấy cắp thông tin hoặc
						tiết lộ không được phép về thông tin cá nhân hoặc Tài Khoản của
						Người Dùng.
					</p>
					<p>
						8.2 Người Dùng cam kết không sử dụng, và không cho bất kỳ bên thứ ba
						nào khác sử dụng, Ứng Dụng RUBY và Tài Khoản RUBY để thực hiện các
						hành vi xâm nhập trái phép, tấn công hệ thống, phát tán virus và
						phần mềm độc hại và các hành vi vi phạm Quy Định Pháp Luật hoặc gây
						gián đoạn, cản trở hoạt động bình thường đối với hệ thống của RUBY
						và các đối tác của RUBY, hoặc đối với việc sử dụng Ứng Dụng RUBY,
						Tài Khoản RUBY của người khác.
					</p>
					<p>
						8.3 Người Dùng chịu trách nhiệm và miễn trừ toàn bộ trách nhiệm cho
						RUBY về việc sử dụng hoặc hoạt động trên Tài Khoản RUBY của Người
						Dùng trước pháp luật. Bất kỳ hoạt động gian lận, lừa gạt hoặc hoạt
						động bất hợp pháp khác có thể là căn cứ cho phép RUBY tạm ngừng Tài
						Khoản RUBY và/hoặc chấm dứt Dịch Vụ được cung cấp cho Người Dùng,
						theo toàn quyền quyết định của RUBY, và RUBY có thể trình báo về
						hành vi của Người Dùng với các cơ quan nhà nước có thẩm quyền để xem
						xét xử lý.
					</p>
				</div>
				{/* 9 */}
				<div className="mt-2 flex flex-col gap-2">
					<p className="mb-1 font-bold">9. Thông Tin Liên Lạc và Thông Báo</p>
					<p>
						9.1 Người Dùng đồng ý rằng RUBY hoặc các bên liên kết của RUBY có
						thể gửi tin nhắn hoặc gọi điện thoại cho Người Dùng thông qua số
						điện thoại hoặc thông báo qua Ứng Dụng RUBY về hoặc liên quan đến
						các thông tin cập nhật về Dịch Vụ và các sự kiện được đưa ra hoặc
						cung cấp bởi RUBY hoặc các bên liên kết của RUBY. Người Dùng đồng ý
						rằng các thông báo được gửi qua hình thức tin nhắn hoặc cuộc gọi
						hoặc qua Ứng Dụng RUBY nêu tại điều này sẽ không bị giới hạn về số
						lượng và thời gian và có giá trị đầy đủ như một thông báo chính thức
						của RUBY đến Người Dùng với điều kiện đảm bảo tuân thủ đầy đủ các
						quy định của pháp luật.
					</p>
					<p>
						9.2 Người Dùng đồng ý rằng RUBY không có bất kỳ nghĩa vụ nào trong
						việc đưa ra thông báo định kỳ cho Người Dùng về chi tiết các giao
						dịch được tiến hành bởi Người Dùng.
					</p>
					<p>
						9.3 Mọi thông báo và tài liệu (nếu có) cần phải được đưa ra bởi
						Người Dùng theo những Điều Khoản Chung này cho RUBY sẽ được gửi cho
						RUBY đến địa chỉ trụ sở hoặc thông qua Dịch Vụ Khách hàng của RUBY.
					</p>
					<p>
						9.4 Tất cả các thông báo và tài liệu (nếu có) cần gửi cho Người Dùng
						bởi RUBY theo những Điều Khoản Chung này sẽ được gửi bằng một trong
						những phương thức sau đây:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							- Gửi thư thường hoặc thư bảo đảm đến địa chỉ mới nhất của Người
							Dùng theo Tài Khoản RUBY của Người Dùng tại RUBY;
						</li>
						<li>
							- Gửi thư điện tử đến địa chỉ thư điện tử mới nhất của Người Dùng
							theo ghi chép của RUBY;
						</li>
						<li>
							- Công bố thông báo hoặc thông tin liên lạc trên trang web
							RUBY.tech;
						</li>
						<li>
							- Gửi tin nhắn (SMS) hoặc gọi điện đến số điện thoại mới nhất của
							Người Dùng theo ghi chép của RUBY.
						</li>
					</ul>
					<p>
						9.5 Bất kỳ thông báo hoặc tài liệu hoặc thư từ liên lạc nào được xem
						là đã được gửi và nhận:
					</p>
					<ul className="space-y-1 pl-2">
						<li>
							- Nếu được gửi bằng thư thường hoặc thư bảo đảm, trong vòng ba (3)
							Ngày Làm Việc kể từ ngày gửi;
						</li>
						<li>
							- Nếu được gửi bằng các hình thức khác được quy định tại điều này,
							Ngày Làm Việc sau ngày gửi thông báo hoặc tài liệu đó.
						</li>
					</ul>
				</div>
			</div>
		</DialogWrapper>
	)
}

export default TermPolicy
