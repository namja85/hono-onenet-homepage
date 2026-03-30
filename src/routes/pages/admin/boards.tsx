import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import AdminBoards from "@/pages/admin/boards";
import AdminBoardsNew from "@/pages/admin/boards/new";
import AdminBoardsDetail from "@/pages/admin/boards/detail";
import AdminBoardsEdit from "@/pages/admin/boards/edit";
import {
  getBoards,
  createBoard,
  getBoardById,
  updateBoard,
  deleteBoard,
} from "@/queries";

const adminBoardsRoute = new Hono();

const fileFieldSchema = z.preprocess((value) => {
  if (value === "" || value == null) return undefined;
  if (value instanceof File && value.size === 0) return undefined;
  return value;
}, z.instanceof(File).optional());

adminBoardsRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷 | 게시판 관리",
      description: "게시판 관리 페이지입니다.",
    }),
    async (c) => {
      const { data: boards } = await getBoards();
      return c.render(<AdminBoards boards={boards} />);
    }
  )
  .get(
    "/new",
    htmlMiddleware({
      title: "원넷 | 게시판 생성",
      description: "게시판 생성 페이지입니다.",
    }),
    (c) => {
      return c.render(<AdminBoardsNew />);
    }
  )
  .post("/create", async (c) => {
    const payload = await c.req.formData();
    const parsedPayload = await z
      .object({
        title: z.string().min(1),
        type: z.enum(["notice", "download"]),
        content: z.string().optional().default(""),
        file: fileFieldSchema,
      })
      .safeParseAsync({
        title: payload.get("title"),
        type: payload.get("type"),
        content: payload.get("content"),
        file: payload.get("file"),
      });

    if (!parsedPayload.success) {
      throw new HTTPException(400, { message: "Invalid payload" });
    }

    const { data: newBoard } = await createBoard(parsedPayload.data);
    return c.redirect(`/admin/boards/${newBoard.id}`);
  })
  .get(
    "/:id",
    htmlMiddleware({
      title: "원넷 | 게시판 상세",
      description: "게시판 상세 페이지입니다.",
    }),
    async (c) => {
      const id = c.req.param("id");
      const parsedId = await z.coerce.number().safeParseAsync(id);

      if (!parsedId.success) {
        return c.notFound();
      }

      const { data: board } = await getBoardById(parsedId.data);
      return c.render(<AdminBoardsDetail board={board} />);
    }
  )
  .get(
    "/:id/edit",
    htmlMiddleware({
      title: "원넷 | 게시판 수정",
      description: "게시판 수정 페이지입니다.",
    }),
    async (c) => {
      const id = c.req.param("id");
      const parsedId = await z.coerce.number().safeParseAsync(id);

      if (!parsedId.success) {
        return c.notFound();
      }

      const { data: board } = await getBoardById(parsedId.data);
      return c.render(<AdminBoardsEdit board={board} />);
    }
  )
  .post("/:id/update", async (c) => {
    const id = c.req.param("id");
    const parsedId = await z.coerce.number().safeParseAsync(id);

    if (!parsedId.success) {
      throw new HTTPException(400, { message: "Invalid id" });
    }

    const payload = await c.req.formData();
    const parsedPayload = await z
      .object({
        title: z.string().min(1),
        type: z.enum(["notice", "download"]),
        content: z.string().optional().default(""),
        file: fileFieldSchema,
      })
      .safeParseAsync({
        title: payload.get("title"),
        type: payload.get("type"),
        content: payload.get("content"),
        file: payload.get("file"),
      });

    if (!parsedPayload.success) {
      throw new HTTPException(400, { message: "Invalid payload" });
    }

    await updateBoard(parsedId.data, parsedPayload.data);
    return c.redirect(`/admin/boards/${parsedId.data}`);
  })
  .post("/:id/delete", async (c) => {
    const id = c.req.param("id");
    const parsedId = await z.coerce.number().safeParseAsync(id);

    if (!parsedId.success) {
      throw new HTTPException(400, { message: "Invalid id" });
    }

    await deleteBoard(parsedId.data);
    return c.redirect("/admin/boards");
  });

export default adminBoardsRoute;
