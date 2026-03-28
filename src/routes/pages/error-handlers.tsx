import type { Hono } from "hono";
import Html from "@/components/Html";
import type { User } from "@/types";
import NotFoundPage from "@/pages/error/NotFoundPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";

function getUser(c: { get: (key: "user") => User }): User {
  return c.get("user") ?? null;
}

export function attachPagesErrorHandlers(app: Hono) {
  app.onError((err, c) => {
    console.error(err);
    const user = getUser(c);
    return c.html(
      <Html
        title="오류 | 원넷"
        description="일시적인 오류가 발생했습니다."
        pathname={c.req.path}
        user={user}
      >
        <ServerErrorPage />
      </Html>,
      500
    );
  });

  app.notFound((c) => {
    const user = getUser(c);
    return c.html(
      <Html
        title="페이지를 찾을 수 없습니다 | 원넷"
        description="요청하신 페이지를 찾을 수 없습니다."
        pathname={c.req.path}
        user={user}
      >
        <NotFoundPage />
      </Html>,
      404
    );
  });
}
