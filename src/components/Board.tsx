import type { BoardType, FileType } from "@/db/schema";
import {
  formatDateYmd,
  getBoardTypeLabel,
  hasBoardAttachment,
  hasTrimmedContent,
} from "@/lib/utils";

interface BoardProps {
  board: BoardType & { file: FileType | null };
  /** 공개 다운로드 경로 접두사 (예: `/support`, `/customer-center`) */
  fileDownloadBase: string;
}

export default function Board({ board, fileDownloadBase }: BoardProps) {
  const hasContent = hasTrimmedContent(board.content);
  const file = board.file;
  const hasFile = hasBoardAttachment(file);
  const downloadHref = hasFile ? `${fileDownloadBase}/${board.id}/file` : null;

  return (
    <div class="bg-neutral-100 rounded-xl p-4 md:p-6">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
          <span class="text-base/6 md:text-xl text-blue-900 font-bold">
            {getBoardTypeLabel(board.type)}
          </span>
          <span class="text-base/6 md:text-xl text-neutral-600">
            작성일: {formatDateYmd(board.createdAt)}
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
          {hasContent ? (
            <pre class="text-base/6 md:text-xl whitespace-pre-wrap">
              {board.content}
            </pre>
          ) : (
            <span class="text-base/6 md:text-xl text-neutral-400">
              등록된 내용이 없습니다.
            </span>
          )}
        </div>
        <div class="flex flex-col gap-2">
          <span class="text-base/6 md:text-xl text-neutral-600 font-bold">
            첨부파일
          </span>
          {hasFile && downloadHref ? (
            <a
              href={downloadHref}
              download={file.name}
              class="text-base/6 md:text-xl text-blue-900 underline"
            >
              {file.name}
            </a>
          ) : (
            <span class="text-base/6 md:text-xl text-neutral-400">
              첨부된 파일이 없습니다.
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
