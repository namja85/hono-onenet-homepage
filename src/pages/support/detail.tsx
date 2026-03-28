import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Board from "@/components/Board";
import type { BoardType, FileType } from "@/db/schema";

interface SupportDetailProps {
  board: BoardType & { file: FileType | null };
}

export default function SupportDetail({ board }: SupportDetailProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="기술 지원"
          description="지금 바로 필요한 자료를 찾아보세요. 원넷 자료실에서 해답을 발견하실 수 있습니다."
        />
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">
            원넷의 <span class="text-blue-900 font-bold">자료실</span>
          </h2>

          <Board board={board} fileDownloadBase="/support" />
        </Container>
      </section>
    </Layout>
  );
}
