import { db } from "@/db";
import { and, desc, eq, getColumns } from "drizzle-orm";
import * as schema from "@/db/schema";

export async function getBoards({
  id,
  type,
}: {
  id?: number | undefined;
  type?: string | undefined;
} = {}) {
  const whereConditions = [
    id ? eq(schema.boards.id, id) : undefined,
    type ? eq(schema.boards.type, type) : undefined,
  ];

  const whereClause = and(...whereConditions);

  const boards = await db
    .select({
      ...getColumns(schema.boards),
      file: schema.files,
    })
    .from(schema.boards)
    .leftJoin(schema.files, eq(schema.boards.id, schema.files.boardId))
    .where(whereClause)
    .orderBy(desc(schema.boards.createdAt));

  return { data: boards };
}

export async function createBoard(payload: {
  title: string;
  type: string;
  content: string;
  file?: File | undefined;
}) {
  const [newBoard] = await db
    .insert(schema.boards)
    .values({
      title: payload.title,
      type: payload.type,
      content: payload.content,
    })
    .returning();

  await createFile(newBoard.id, payload.file);

  return { data: newBoard };
}

export async function createFile(boardId: number, file?: File) {
  if (!file) {
    return { data: null };
  }

  const [newFile] = await db
    .insert(schema.files)
    .values({
      boardId: boardId,
      name: file.name,
      mimeType: file.type,
      size: file.size,
      data: Buffer.from(await file.arrayBuffer()),
    })
    .returning();

  return { data: newFile };
}

export async function getBoardById(id: number) {
  const { data: boards } = await getBoards({ id });

  return { data: boards[0] };
}

export async function getFileByBoardId(boardId: number) {
  const [row] = await db
    .select()
    .from(schema.files)
    .where(eq(schema.files.boardId, boardId))
    .limit(1);

  return { data: row ?? null };
}

export async function updateBoard(
  id: number,
  payload: {
    title: string;
    type: string;
    content: string;
    file?: File | undefined;
  }
) {
  const [updatedBoard] = await db
    .update(schema.boards)
    .set({
      title: payload.title,
      type: payload.type,
      content: payload.content,
    })
    .where(eq(schema.boards.id, id))
    .returning();

  console.log("updatedBoard", updatedBoard);
  console.log("payload.file", payload.file);
  await updateFile(id, payload.file);

  return { data: updatedBoard };
}

export async function updateFile(boardId: number, file?: File) {
  if (!file) {
    return { data: null };
  }

  console.log("file", file);

  const foundFile = await db
    .select()
    .from(schema.files)
    .where(eq(schema.files.boardId, boardId));

  const isFileExists = foundFile.length > 0;

  if (isFileExists) {
    const [updatedFile] = await db
      .update(schema.files)
      .set({
        name: file.name,
        mimeType: file.type,
        size: file.size,
        data: Buffer.from(await file.arrayBuffer()),
      })
      .where(eq(schema.files.boardId, boardId))
      .returning();
    return { data: updatedFile };
  }

  const { data: newFile } = await createFile(boardId, file);

  return { data: newFile };
}

export async function deleteBoard(id: number) {
  await db.delete(schema.boards).where(eq(schema.boards.id, id));
  await db.delete(schema.files).where(eq(schema.files.boardId, id));
}
