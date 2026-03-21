import { createMiddleware } from "hono/factory";
import Html from "@/components/Html";

export const htmlMiddleware = () =>
  createMiddleware(async (c, next) => {
    c.setRenderer((content) => {
      return c.html(<Html>{content}</Html>);
    });
    await next();
  });
