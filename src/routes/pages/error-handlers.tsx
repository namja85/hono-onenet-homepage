import Html from "@/components/Html";
import NotFoundPage from "@/pages/error/NotFoundPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import type { Hono } from "hono";
import type { Session, User } from "@/types";

export function attachPagesErrorHandlers(
  app: Hono<{ Variables: { user: User; session: Session } }>
) {
  app.onError((err, c) => {
    const user = c.get("user");
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
    const user = c.get("user");
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
