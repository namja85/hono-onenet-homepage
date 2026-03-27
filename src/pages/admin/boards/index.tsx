import Container from "@/components/Container";
import List from "@/components/List";
import ListItem from "@/components/ListItem";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Plus from "@/components/icons/Plus";
import type { BoardType, FileType } from "@/db/schema";

interface AdminBoardsProps {
  boards: (BoardType & { file: FileType | null })[];
}

export default function AdminBoards({ boards }: AdminBoardsProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10">
        <PageTitle
          title="게시판 관리"
          description="게시판 관리 페이지입니다."
        />
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <div class="flex justify-between items-center">
            <LinkButton href="/admin">
              <ArrowLeft />
              <span class="text-base/6 md:text-2xl">
                관리자 홈으로 돌아가기
              </span>
            </LinkButton>
            <LinkButton href="/admin/boards/new">
              <Plus />
              <span class="text-base/6 md:text-2xl">게시판 생성</span>
            </LinkButton>
          </div>
        </Container>
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">공지사항, 자료실</h2>
          <div class="bg-neutral-100 rounded-xl p-4">
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
          </div>
        </Container>
      </section>
    </Layout>
  );
}
