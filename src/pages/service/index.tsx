import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function Service() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="서비스 소개"
          description="원넷은 사업형태, 결제환경, 결제방식 등 고객의 입장에서 최고의 맞춤형 결제 서비스를 개발하고 제공합니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <div class="flex flex-col md:flex-row-reverse items-center gap-4 md:gap-10">
            <div class="flex-1">
              <h2 class="text-2xl/10 md:text-4xl/20">
                원넷의 <span class="text-blue-900 font-bold">결제수단</span>
              </h2>
              <p class="text-base/6 md:text-2xl/10 text-neutral-600">
                국내 카드사와의 개별 계약 및 연동을 해결하고 고객 맞춤형
                결제수단을 제공하는{" "}
                <span class="text-blue-900 font-bold">PG시스템</span>
              </p>
              <p class="text-base/6 md:text-2xl/10 text-neutral-600">
                입금전용계좌를 통해 입금자, 입금금액 확인으로 안전이 검증된 수납
                업무가 가능한{" "}
                <span class="text-blue-900 font-bold">가상계좌서비스</span>
              </p>
              <p class="text-base/6 md:text-2xl/10 text-neutral-600">
                기업의 대량이체, 자동 출금 및 송금을 지원하느{" "}
                <span class="text-blue-900 font-bold">펌뱅킹서비스</span>
              </p>
            </div>
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img src="/public/images/service.png" alt="서비스 소개 이미지" />
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
