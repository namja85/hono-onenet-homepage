import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function Company() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="회사 소개"
          description="원넷은 온/오프라인 환경에서 상품과 서비스를 구매할 때 안전하고 편리한 결제 수단을 제공하는 전자결제 전문 기업입니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img src="/public/images/introduce.png" alt="회사 소개 이미지" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl/10 md:text-4xl/20">
                안녕하세요. <span class="text-blue-800 font-bold">원넷</span>
                입니다.
              </h2>
              <p class="text-base/6 md:text-2xl/10 text-neutral-600">
                <span class="text-blue-800 font-bold">원넷</span>은
                온/오프라인을 넘어서 현재에 안주하지 않고 변화하는 결제 시장에
                발맞춰 종합결제사로 성장하여 글로벌 결제 시장의 중심에서 세계가
                주목하는 기업이 되겠다는 목표를 가지고 도전하고 있습니다.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <div class="flex-1 ratio-square bg-neutral-200 rounded-xl overflow-clip">
              <img src="/public/images/map.png" alt="오시는 길 지도" />
            </div>
            <div class="flex-1">
              <h2 class="text-2xl/10 md:text-4xl/20">오시는 길</h2>
              <ul class="flex flex-col gap-2">
                <li class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-base/6 md:text-2xl text-neutral-600">
                  <span class="text-base/6 md:text-2xl font-bold">주소:</span>
                  <span>(41256) 대구광역시 동구 동대구로 489, 8층 811호</span>
                </li>
                <li class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-base/6 md:text-2xl text-neutral-600">
                  <span class="text-base/6 md:text-2xl font-bold">전화:</span>
                  <span>1544-0557</span>
                </li>
                <li class="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-base/6 md:text-2xl text-neutral-600">
                  <span class="text-base/6 md:text-2xl font-bold">팩스:</span>
                  <span>02-592-5059</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
