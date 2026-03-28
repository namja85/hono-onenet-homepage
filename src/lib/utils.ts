import { format } from "date-fns";

const BOARD_TYPE_LABEL: Record<string, string> = {
  notice: "공지사항",
  download: "자료실",
};

/** 게시판 `type` 값에 대응하는 표시용 문구 (알 수 없는 값은 그대로 반환) */
export function getBoardTypeLabel(type: string): string {
  return BOARD_TYPE_LABEL[type] ?? type;
}

/** 날짜를 `yyyy-MM-dd` 형식으로 표시 */
export function formatDateYmd(input: Date | string | number): string {
  return format(new Date(input), "yyyy-MM-dd");
}

/** 공백만 있는 문자열은 내용 없음으로 간주 */
export function hasTrimmedContent(content: string | null | undefined): boolean {
  return Boolean(content?.trim());
}

/** 게시판에 연결된 첨부 파일이 있는지 (조인 결과가 `null`인 경우 구분) */
export function hasBoardAttachment<T extends object>(
  file: T | null | undefined
): file is T {
  return file != null;
}
