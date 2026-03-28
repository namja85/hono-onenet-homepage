import Container from "@/components/Container";
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Board from "@/components/Board";
import type { BoardType, FileType } from "@/db/schema";

interface CustomerCenterDetailProps {
  board: BoardType & { file: FileType | null };
}

export default function CustomerCenterDetail({
  board,
}: CustomerCenterDetailProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="고객 센터"
          description="안정적인 서비스 이용을 위한 필수 정보가 여기에 있습니다."
        />
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">
            원넷이 <span class="text-blue-900 font-bold">알립니다.</span>
          </h2>

          <Board board={board} fileDownloadBase="/customer-center" />
        </Container>
      </section>
    </Layout>
  );
}
