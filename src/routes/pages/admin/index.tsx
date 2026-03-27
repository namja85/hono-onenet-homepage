import { Hono } from "hono";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import AdminIndex from "@/pages/admin";
import adminBoardsRoute from "./boards";

const adminIndexRoute = new Hono();

adminIndexRoute
  .get(
    "/",
    htmlMiddleware({
      title: "원넷 | 관리자",
      description: "관리자 페이지입니다.",
    }),
    (c) => {
      return c.render(<AdminIndex />);
    }
  )
  .route("/boards", adminBoardsRoute);

export default adminIndexRoute;
