import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function InquirySubmitSuccess() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="고객 문의 접수 완료"
          description="문의가 정상적으로 접수되었습니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <div class="border border-neutral-200 rounded-xl p-6 md:p-10 text-center space-y-4">
            <h2 class="text-2xl md:text-4xl font-bold text-blue-900">
              접수가 완료되었습니다.
            </h2>
            <p class="text-neutral-600 md:text-xl">
              담당자가 확인 후 빠르게 연락드리겠습니다.
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
