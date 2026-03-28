import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import CustomerCenter from "@/pages/customer-center";
import CustomerCenterDetail from "@/pages/customer-center/detail";
import { getBoardById, getBoards, getFileByBoardId } from "@/queries";

const customerCenterIndexRoute = new Hono();

customerCenterIndexRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷 | 고객센터",
      description:
        "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
    }),
    async (c) => {
      const { data: boards } = await getBoards({ type: "notice" });
      return c.render(<CustomerCenter boards={boards} />);
    }
  )
  .get("/:id/file", async (c) => {
    const id = c.req.param("id");
    const parsedId = await z.coerce.number().safeParseAsync(id);

    if (!parsedId.success) {
      return c.notFound();
    }

    const { data: board } = await getBoardById(parsedId.data);
    if (!board || board.type !== "notice") {
      throw new HTTPException(404, { message: "Not found" });
    }
    const { data: file } = await getFileByBoardId(parsedId.data);
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
  })
  .get(
    "/:id",
    htmlMiddleware({
      title: "원넷 | 고객센터",
      description:
        "원넷은 고객의 문의를 처리하고 고객의 만족을 최우선으로 하는 고객 센터를 제공합니다.",
    }),
    async (c) => {
      const id = c.req.param("id");
      const parsedId = await z.coerce.number().safeParseAsync(id);

      if (!parsedId.success) {
        return c.notFound();
      }

      const { data: board } = await getBoardById(parsedId.data);
      return c.render(<CustomerCenterDetail board={board} />);
    }
  );
export default customerCenterIndexRoute;
