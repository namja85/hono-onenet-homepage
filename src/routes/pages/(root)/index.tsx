import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Home from "@/pages/(root)/index";

const rootIndexRoute = new Hono();

rootIndexRoute.get(
  "/",
  htmlMiddleware({
    title: "원넷",
    description:
      "원넷은 온/오프라인 환경에서 상품과 서비스를 구매할 때 안전하고 편리한 결제 수단을 제공하는 전자결제 전문 기업입니다.",
  }),
  (c) => {
    return c.render(<Home />);
  }
);

export default rootIndexRoute;
