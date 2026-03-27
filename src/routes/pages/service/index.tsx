import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Service from "@/pages/service";

const serviceIndexRoute = new Hono();

serviceIndexRoute.get(
  "/",
  htmlMiddleware({
    title: "원넷 | 서비스소개",
    description:
      "PG시스템, 가상계좌서비스, 펌뱅킹서비스 등 다양한 전자결제 시스템과 연동하여, 원넷은 고객의 사업 형태와 요구에 최적화된 안전하고 효율적인 결제 솔루션을 제공합니다.",
  }),
  (c) => {
    return c.render(<Service />);
  }
);

export default serviceIndexRoute;
