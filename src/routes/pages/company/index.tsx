import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import Company from "@/pages/company";

const companyIndexRoute = new Hono();

companyIndexRoute.get(
  "/",
  htmlMiddleware({
    title: "원넷 | 회사소개",
    description:
      "원넷은 사업형태, 결제환경, 결제방식 등 고객의 입장에서 최고의 맞춤형 결제 서비스를 개발하고 제공합니다.",
  }),
  (c) => {
    return c.render(<Company />);
  }
);

export default companyIndexRoute;
