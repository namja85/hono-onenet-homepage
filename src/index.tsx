import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import pagesRoute from "@/routes/pages.route";

const app = new Hono();

app
  .use(logger())
  .use("/favicon.ico", serveStatic({ path: "./public/images/favicon.ico" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/", pagesRoute);

export default app;
