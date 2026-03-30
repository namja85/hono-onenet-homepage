import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { sessionMiddleware } from "@/middlewares/session.middleware";
import pagesRoute from "@/routes/pages";
import apiRoute from "@/routes/api.route";
import { attachPagesErrorHandlers } from "@/routes/pages/error-handlers";
import { auth } from "@/lib/auth";
import type { Session, User } from "@/types";

const app = new Hono<{ Variables: { user: User; session: Session } }>();

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app
  .use(logger())
  .use(sessionMiddleware())
  .use("/favicon.ico", serveStatic({ path: "./public/images/favicon.ico" }))
  .use("/public/*", serveStatic({ root: "./" }))
  .route("/", pagesRoute)
  .route("/api", apiRoute);

attachPagesErrorHandlers(app);

export default app;
