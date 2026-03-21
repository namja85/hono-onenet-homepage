import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import pagesRoute from "@/routes/pages.route";
import apiRoute from "@/routes/api.route";

const app = new Hono();

app
  .use(logger())
  .use("/favicon.ico", serveStatic({ path: "./public/images/favicon.ico" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/", pagesRoute)
  .route("/api", apiRoute);

export default app;
