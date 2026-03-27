import { Hono } from "hono";
import adminIndexRoute from "./admin";
import adminBoardsRoute from "./admin/boards";

const pagesRoute = new Hono();

pagesRoute
  .route("/admin", adminIndexRoute)
  .route("/admin/boards", adminBoardsRoute);

export default pagesRoute;
