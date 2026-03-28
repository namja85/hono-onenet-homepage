import { createMiddleware } from "hono/factory";

export const guardMiddleware = () =>
  createMiddleware(async (c, next) => {
    const user = c.get("user");
    if (!user) {
      return c.redirect("/auth/login", 302);
    }
    await next();
  });
