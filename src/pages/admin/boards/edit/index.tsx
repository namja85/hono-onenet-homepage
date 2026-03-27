import Container from "@/components/Container";
import ArrowLeft from "@/components/icons/ArrowLeft";
import Layout from "@/components/Layout";
import LinkButton from "@/components/LinkButton";
import PageTitle from "@/components/PageTitle";
import { BoardType, FileType } from "@/db/schema";

interface AdminBoardsEditProps {
  board: BoardType & { file: FileType | null };
}

export default function AdminBoardsEdit({ board }: AdminBoardsEditProps) {
  return (
    <Layout>
      <section class="bg-neutral-800 py-10">
        <PageTitle
          title="게시판 수정"
          description="게시판 수정 페이지입니다."
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
            <form
              action={`/admin/boards/${board.id}/update`}
              method="post"
              enctype="multipart/form-data"
              class="space-y-4"
            >
              <div>
                <label for="type">종류</label>
                <select
                  id="type"
                  name="type"
                  class="w-full p-2 rounded-md border border-neutral-400"
                  defaultValue={board.type}
                >
                  <option value="notice">공지사항</option>
                  <option value="download">자료실</option>
                </select>
              </div>
              <div>
                <label for="title">제목</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="w-full p-2 rounded-md border border-neutral-400"
                  placeholder="제목을 입력해주세요."
                  defaultValue={board.title}
                />
              </div>
              <div>
                <label for="file">파일 첨부</label>
                {board.file && (
                  <div>
                    기존: <span>{board.file.name}</span>
                  </div>
                )}
                <input
                  type="file"
                  id="file"
                  name="file"
                  class="w-full p-2 rounded-md border border-neutral-400"
                />
              </div>
              <div>
                <label for="content">내용</label>
                <textarea
                  id="content"
                  name="content"
                  class="w-full p-2 rounded-md border border-neutral-400 min-h-32 md:min-h-60"
                  placeholder="내용을 입력해주세요."
                  defaultValue={board.content}
                ></textarea>
              </div>

              <div class="flex justify-end">
                <button
                  type="submit"
                  class="bg-blue-900 text-white px-4 py-2 w-full md:w-40 rounded-md"
                >
                  수정하기
                </button>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
