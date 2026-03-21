import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function InquirySubmitFail() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="고객 문의 접수 실패"
          description="입력한 내용을 확인 후 다시 시도해주세요."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <div class="border border-red-200 rounded-xl p-6 md:p-10 text-center space-y-4">
            <h2 class="text-2xl md:text-4xl font-bold text-red-600">
              접수에 실패했습니다.
            </h2>
            <p class="text-neutral-600 md:text-xl">
              필수 입력값이 누락되었거나 이메일 형식이 올바르지 않습니다.
            </p>
            <a
              href="/inquiry"
              class="inline-block bg-blue-900 text-white px-6 py-3 rounded-md"
            >
              문의 페이지로 돌아가기
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
