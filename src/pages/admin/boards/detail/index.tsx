import Container from "@/components/Container";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";
import type { BoardType, FileType } from "@/db/schema";
import { format } from "date-fns";

interface AdminBoardsDetailProps {
  board: BoardType & { file: FileType | null };
}

export default function AdminBoardsDetail({ board }: AdminBoardsDetailProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10">
        <PageTitle
          title="게시판 상세"
          description="게시판 상세 페이지입니다."
        />
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <LinkButton href="/admin/boards">
            <ArrowLeft />
            <span class="text-base/6 md:text-2xl">게시판 관리로 돌아가기</span>
          </LinkButton>
        </Container>
      </section>

      <section class="my-10 md:my-20 p-4">
        <Container>
          <h2 class="text-2xl/10 md:text-4xl/20">공지사항, 자료실</h2>
          <div class="bg-neutral-100 rounded-xl p-4">
            <div class="flex flex-col gap-8">
              <div class="flex justify-between items-center">
                <span class="text-base/6 md:text-xl text-neutral-600 font-bold">
                  {board.type === "notice" ? "[공지사항]" : "[자료실]"}
                </span>
                <span class="text-base/6 md:text-xl text-neutral-600">
                  작성일: {format(new Date(board.createdAt), "yyyy-MM-dd")}
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-base/6 md:text-xl text-neutral-600 font-bold">
                  제목
                </span>
                <span class="text-base/6 md:text-xl">{board.title}</span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-base/6 md:text-xl text-neutral-600 font-bold">
                  내용
                </span>
                {board.content ? (
                  <pre class="text-base/6 md:text-xl whitespace-pre-wrap">
                    {board.content}
                  </pre>
                ) : (
                  <span class="text-base/6 md:text-xl text-neutral-400">
                    (내용이 없습니다.)
                  </span>
                )}
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-base/6 md:text-xl text-neutral-600 font-bold">
                  첨부파일
                </span>
                {board.file ? (
                  <a
                    href={`/admin/boards/download/${board.file.id}`}
                    target="_blank"
                    class="text-base/6 md:text-xl text-neutral-600 underline"
                  >
                    {board.file.name}
                  </a>
                ) : (
                  <span class="text-base/6 md:text-xl text-neutral-400">
                    (첨부파일이 없습니다.)
                  </span>
                )}
              </div>
            </div>
          </div>
          <div class="mt-4 flex justify-between">
            <form action={`/admin/boards/${board.id}/delete`} method="post">
              <button
                type="submit"
                class="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                <span class="text-base/6 md:text-xl">삭제하기</span>
              </button>
            </form>
            <LinkButton href={`/admin/boards/${board.id}/edit`}>
              <span class="text-base/6 md:text-xl">수정하기</span>
            </LinkButton>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
