import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Support from "@/pages/support";
import { getBoards } from "@/queries";

const supportIndexRoute = new Hono();

supportIndexRoute.get(
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
);

export default supportIndexRoute;
