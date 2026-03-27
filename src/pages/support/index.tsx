import Container from "@/components/Container";
import Layout from "@/components/Layout";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import PageTitle from "@/components/PageTitle";
import type { BoardType, FileType } from "@/db/schema";

interface SupportProps {
  boards: (BoardType & { file: FileType | null })[];
}

export default function Support({ boards }: SupportProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10 md:py-40">
        <PageTitle
          title="기술 지원"
          description="지금 바로 필요한 자료를 찾아보세요. 원넷 자료실에서 해답을 발견하실 수 있습니다."
        />
      </section>

      <section class="my-20 md:my-40 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">
            원넷의 <span class="text-blue-900 font-bold">자료실</span>
          </h2>
          <List>
            {boards.length > 0 ? (
              <ul class="space-y-4">
                {boards.map((board) => (
                  <li key={board.id}>
                    <ListItem
                      type={board.type == "notice" ? "notice" : "download"}
                      hasFile={!!board.file}
                      title={board.title}
                      date={board.createdAt}
                      href={`/admin/boards/${board.id}`}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p class="text-base/6 md:text-2xl text-neutral-600">
                게시판이 없습니다.
              </p>
            )}
          </List>
        </Container>
      </section>
    </Layout>
  );
}
