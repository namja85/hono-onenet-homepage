import Container from "@/components/Container";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 class="hidden">메인 페이지</h1>

      <section class="h-130 bg-gray-100">slide</section>

      <section class="my-20">
        <Container>
          <div class="flex flex-row-reverse items-center gap-10">
            <div class="flex-1">
              <h2 class="text-4xl/20 font-bold text-blue-900 text-end">
                전자결제 (PG)
              </h2>
              <p class="text-2xl/10 text-neutral-600 text-end">
                원넷과의 계약을 통해 가맹점에서 상품과 서비스 판매시 신용카드,
                가상계좌, 포인트결제 등 다양한 결제 수단을 이용할 수 있으며 국내
                최저 수준의 수수료와 함께 결제 및 정산내역 등 보다 편리한 매출
                관리를 위해 관리자 페이지를 제공하고 있습니다.
              </p>
            </div>
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img
                class="w-full h-full object-contain"
                src="/public/images/payment.png"
                alt="전자결제 (PG) 이미지"
              />
            </div>
          </div>
        </Container>
      </section>

      <section class="my-20">
        <Container>
          <div class="flex items-center gap-10">
            <div class="flex-1">
              <h2 class="text-4xl/20 font-bold text-blue-900">가상계좌</h2>
              <p class="text-2xl/10 text-neutral-600">
                입급전용계좌를 통해 온라인 쇼핑몰, 카드사, 공공기관 등 결제가
                필요할 때 가상계좌로 입금을 요청하여 거래내역을 실시간으로
                확인하는 서비스로 입금자 및 입금금액 확인을 통해 보다 정확하고
                효율적인 수납관리를 할 수 있습니다.
              </p>
            </div>
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img
                class="w-full h-full object-contain"
                src="/public/images/account.png"
                alt="가상계좌 이미지"
              />
            </div>
          </div>
        </Container>
      </section>

      <section class="my-20">
        <Container>
          <div class="flex flex-row-reverse items-center gap-10">
            <div class="flex-1">
              <h2 class="text-4xl/20 font-bold text-blue-900 text-end">
                펌뱅킹
              </h2>
              <p class="text-2xl/10 text-neutral-600 text-end">
                기업에 필요한 자동이체, 대량송금, 거래내역 등 모든 자금 관리를
                포함한 통신료, 보험료 등의 납부를 위한 서비스를 제공하고
                있습니다.
              </p>
            </div>
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img
                class="w-full h-full object-contain"
                src="/public/images/banking.png"
                alt="펌뱅킹 이미지"
              />
            </div>
          </div>
        </Container>
      </section>

      <section class="bg-neutral-800 my-40">
        <Container>
          <div class="flex justify-around items-center gap-10 py-10">
            <p class="text-4xl text-white leading-relaxed">
              보안성과 편의성의 완벽한 조화,
              <br />
              <span class="text-blue-400 font-bold">원넷</span>과 함께 하세요!
            </p>
            <div class="flex items-center gap-4">
              <div class="ratio-square size-50 bg-neutral-200 rounded-xl">
                <img
                  src="/public/images/image1.png"
                  alt="편의성의 특징 나타내는 이미지"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="ratio-square size-50 bg-neutral-200 rounded-xl">
                <img
                  src="/public/images/image2.png"
                  alt="가상계좌 기능을 나타내는 이미지"
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="ratio-square size-50 bg-neutral-200 rounded-xl">
                <img
                  src="/public/images/image3.png"
                  alt="보안성의 특징을 나타내는 이미지"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
