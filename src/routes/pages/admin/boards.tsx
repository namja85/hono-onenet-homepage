import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
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
  .post(
    "/create",
    zValidator(
      "form",
      z.object({
        title: z.string().min(1),
        type: z.enum(["notice", "download"]),
        content: z.string().optional().default(""),
        file: fileFieldSchema,
      })
    ),
    async (c) => {
      const payload = c.req.valid("form");
      try {
        const { data: newBoard } = await createBoard(payload);
        return c.redirect(`/admin/boards/${newBoard.id}`);
      } catch (error) {
        console.error(error);
        throw new HTTPException(500, { message: "Failed to create board" });
      }
    }
  )
  .get(
    "/:id",
    htmlMiddleware({
      title: "원넷 | 게시판 상세",
      description: "게시판 상세 페이지입니다.",
    }),
    zValidator(
      "param",
      z.object({
        id: z.coerce.number(),
      })
    ),
    async (c) => {
      const { id } = c.req.valid("param");
      const { data: board } = await getBoardById(id);
      return c.render(<AdminBoardsDetail board={board} />);
    }
  )
  .get(
    "/:id/edit",
    htmlMiddleware({
      title: "원넷 | 게시판 수정",
      description: "게시판 수정 페이지입니다.",
    }),
    zValidator("param", z.object({ id: z.coerce.number() })),
    async (c) => {
      const { id } = c.req.valid("param");
      const { data: board } = await getBoardById(id);
      return c.render(<AdminBoardsEdit board={board} />);
    }
  )
  .post(
    "/:id/update",
    zValidator("param", z.object({ id: z.coerce.number() })),
    zValidator(
      "form",
      z.object({
        title: z.string().min(1),
        type: z.enum(["notice", "download"]),
        content: z.string().optional().default(""),
        file: fileFieldSchema,
      })
    ),
    async (c) => {
      const { id } = c.req.valid("param");
      const payload = c.req.valid("form");
      console.log("update board", payload);
      await updateBoard(id, payload);
      return c.redirect(`/admin/boards/${id}`);
    }
  )
  .post(
    "/:id/delete",
    zValidator("param", z.object({ id: z.coerce.number() })),
    async (c) => {
      const { id } = c.req.valid("param");
      await deleteBoard(id);
      return c.redirect("/admin/boards");
    }
  );

export default adminBoardsRoute;
