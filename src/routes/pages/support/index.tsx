import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
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
  .get("/:id/file", async (c) => {
    const id = c.req.param("id");
    const parsedId = await z.coerce.number().safeParseAsync(id);

    if (!parsedId.success) {
      return c.notFound();
    }

    const { data: board } = await getBoardById(parsedId.data);
    if (!board || board.type !== "download") {
      return c.notFound();
    }
    const { data: file } = await getFileByBoardId(parsedId.data);
    if (!file) {
      return c.notFound();
    }
    const disposition = `attachment; filename*=UTF-8''${encodeURIComponent(
      file.name
    )}`;
    return c.body(new Uint8Array(file.data), 200, {
      "Content-Type": file.mimeType,
      "Content-Disposition": disposition,
    });
  })
  .get(
    "/:id",
    htmlMiddleware({
      title: "원넷 | 기술지원",
      description:
        "원넷은 최신 보안 기술과 신속한 기술 지원으로 안정적이고 안전한 결제 환경을 제공합니다.",
    }),
    async (c) => {
      const id = c.req.param("id");
      const parsedId = await z.coerce.number().safeParseAsync(id);

      if (!parsedId.success) {
        return c.notFound();
      }

      const { data: board } = await getBoardById(parsedId.data);
      return c.render(<SupportDetail board={board} />);
    }
  );

export default supportIndexRoute;
