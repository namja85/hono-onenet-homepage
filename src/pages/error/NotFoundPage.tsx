import Container from "@/components/Container";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";

export default function NotFoundPage() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-12 md:py-20">
        <PageTitle
          title="페이지를 찾을 수 없습니다"
          description="요청하신 주소의 페이지가 없거나 이동·삭제되었을 수 있습니다."
        />
      </section>
      <section class="my-12 md:my-20 p-4">
        <Container>
          <div class="max-w-lg mx-auto text-center rounded-xl bg-neutral-100 border border-neutral-200 p-8 md:p-10">
            <p class="text-5xl md:text-6xl font-bold text-blue-900/40 tabular-nums mb-4">
              404
            </p>
            <p class="text-neutral-600 text-base/7 mb-8">
              주소를 다시 확인하시거나 홈에서 필요한 메뉴를 찾아 주세요.
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
