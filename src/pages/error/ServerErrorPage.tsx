import Container from "@/components/Container";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";

export default function ServerErrorPage() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-12 md:py-20">
        <PageTitle
          title="일시적인 오류가 발생했습니다"
          description="잠시 후 다시 시도해 주세요. 문제가 계속되면 관리자에게 문의해 주세요."
        />
      </section>
      <section class="my-12 md:my-20 p-4">
        <Container>
          <div class="max-w-lg mx-auto text-center rounded-xl bg-neutral-100 border border-neutral-200 p-8 md:p-10">
            <p class="text-5xl md:text-6xl font-bold text-red-900/35 tabular-nums mb-4">
              500
            </p>
            <p class="text-neutral-600 text-base/7 mb-8">
              서버에서 요청을 처리하는 중 문제가 발생했습니다. 불편을 드려
              죄송합니다.
            </p>
            <LinkButton
              href="/"
              class="border-blue-900 bg-blue-900 text-white hover:bg-blue-950 hover:border-blue-950"
            >
              홈으로 돌아가기
            </LinkButton>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
