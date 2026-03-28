import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import pagesRoute from "@/routes/pages";
import apiRoute from "@/routes/api.route";
import { auth } from "@/lib/auth";
import { sessionMiddleware } from "@/middlewares/session.middleware";

const app = new Hono();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app
  .use(logger())
  .use(sessionMiddleware())
  .use("/favicon.ico", serveStatic({ path: "./public/images/favicon.ico" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/", pagesRoute)
  .route("/api", apiRoute);

export default app;
