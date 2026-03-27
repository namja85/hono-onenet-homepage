import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

export default function AdminIndex() {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10">
        <PageTitle title="관리자" description="관리자 페이지입니다." />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">게시판 관리</h2>
          <div>
            <a href="/admin/boards" class="block hover:underline">
              <span class="text-base/6 md:text-2xl text-neutral-600">
                게시판 관리 (공지사항, 자료실)
              </span>
            </a>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
