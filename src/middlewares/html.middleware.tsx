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
    const user = c.get("user");

    c.setRenderer((content) => {
      return c.html(
        <Html
          title={title}
          description={description}
          pathname={c.req.path}
          user={user}
        >
          {content}
        </Html>
      );
    });
    await next();
  });
