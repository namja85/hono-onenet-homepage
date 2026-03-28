import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Support from "@/pages/support";
import SupportDetail from "@/pages/support/detail";
import { getBoardById, getBoards, getFileByBoardId } from "@/queries";

const supportIndexRoute = new Hono();

supportIndexRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷 | 기술지원",
      description:
        "원넷은 최신 보안 기술과 신속한 기술 지원으로 안정적이고 안전한 결제 환경을 제공합니다.",
    }),
    async (c) => {
      const { data: boards } = await getBoards({ type: "download" });
      return c.render(<Support boards={boards} />);
    }
  )
  .get(
    "/:id/file",
    zValidator("param", z.object({ id: z.coerce.number() })),
    async (c) => {
      const { id } = c.req.valid("param");
      const { data: board } = await getBoardById(id);
      if (!board || board.type !== "download") {
        throw new HTTPException(404, { message: "Not found" });
      }
      const { data: file } = await getFileByBoardId(id);
      if (!file) {
        throw new HTTPException(404, { message: "Not found" });
      }
      const disposition = `attachment; filename*=UTF-8''${encodeURIComponent(
        file.name
      )}`;
      return c.body(new Uint8Array(file.data), 200, {
        "Content-Type": file.mimeType,
        "Content-Disposition": disposition,
      });
    }
  )
  .get(
    "/:id",
    htmlMiddleware({
      title: "원넷 | 기술지원",
      description:
        "원넷은 최신 보안 기술과 신속한 기술 지원으로 안정적이고 안전한 결제 환경을 제공합니다.",
    }),
    zValidator("param", z.object({ id: z.coerce.number() })),
    async (c) => {
      const { id } = c.req.valid("param");
      const { data: board } = await getBoardById(id);
      return c.render(<SupportDetail board={board} />);
    }
  );

export default supportIndexRoute;
