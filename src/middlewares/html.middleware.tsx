import { createMiddleware } from "hono/factory";
import Html from "@/components/Html";

export const htmlMiddleware = ({
  title,
  description = "",
}: {
  title: string;
  description?: string;
}) =>
  createMiddleware(async (c, next) => {
    c.setRenderer((content) => {
      return c.html(
        <Html title={title} description={description} pathname={c.req.path}>
          {content}
        </Html>
      );
    });
    await next();
  });
