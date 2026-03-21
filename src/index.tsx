import { Hono } from "hono";
import { logger } from "hono/logger";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import pagesRoute from "@/routes/pages.route";

const app = new Hono();

app.use(logger()).use(htmlMiddleware()).route("/", pagesRoute);

export default app;
