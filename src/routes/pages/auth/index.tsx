import { Hono } from "hono";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { getCookie, setCookie } from "hono/cookie";
import AuthLogin from "@/pages/auth/login";
import { htmlMiddleware } from "@/middlewares/html.middleware";
import { auth } from "@/lib/auth";
import config from "@/config";

const LOGIN_FLASH_COOKIE = "login_flash";

function appendSetCookies(target: Headers, source: Headers) {
  const list =
    typeof source.getSetCookie === "function" ? source.getSetCookie() : null;
  if (list && list.length > 0) {
    for (const cookie of list) target.append("Set-Cookie", cookie);
    return;
  }
  const legacy = source.get("Set-Cookie");
  if (legacy) target.append("Set-Cookie", legacy);
}

const authRoute = new Hono();

authRoute
  .get(
    "/login",
    htmlMiddleware({
      title: "원넷 | 관리자 로그인",
      description: "관리자 로그인 페이지입니다.",
    }),
    (c) => {
      const raw = getCookie(c, LOGIN_FLASH_COOKIE);
      const flash = raw || undefined;
      if (raw) {
        setCookie(c, LOGIN_FLASH_COOKIE, "", {
          path: "/",
          maxAge: 0,
        });
      }
      return c.render(<AuthLogin flash={flash} />);
    }
  )
  .post(
    "/login",
    zValidator(
      "form",
      z.object({
        email: z.string().email(),
        password: z.string().min(8),
      })
    ),
    async (c) => {
      const { email, password } = c.req.valid("form");
      const authResponse = await auth.api.signInEmail({
        body: { email, password },
        headers: c.req.raw.headers,
        asResponse: true,
      });

      if (authResponse.ok) {
        const res = c.redirect("/", 302);
        appendSetCookies(res.headers, authResponse.headers);
        return res;
      }

      let message = "로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.";
      try {
        const body = (await authResponse.json()) as { message?: string };
        if (typeof body?.message === "string" && body.message.length > 0) {
          message = body.message;
        }
      } catch {
        /* use default message */
      }

      setCookie(c, LOGIN_FLASH_COOKIE, message, {
        path: "/",
        maxAge: 120,
        httpOnly: true,
        sameSite: "Lax",
        secure: config.nodeEnv === "production",
      });
      return c.redirect("/auth/login", 302);
    }
  )
  // .post("/logout", async (c) => {
  //   const authResponse = await auth.api.signOut({
  //     headers: c.req.raw.headers,
  //     asResponse: true,
  //   });
  //   return c.redirect("/", 302);
  // })
  .post("/logout", async (c) => {
    const res = await auth.api.signOut({
      headers: c.req.raw.headers,
    });
    console.log("logout", res);
    return c.redirect("/", 302);
  });

export default authRoute;
