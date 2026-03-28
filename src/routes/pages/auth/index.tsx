import { Hono } from "hono";
import type { Context } from "hono";
import { z } from "zod";
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

function setLoginFlashCookie(c: Context, message: string) {
  setCookie(c, LOGIN_FLASH_COOKIE, message, {
    path: "/",
    maxAge: 120,
    httpOnly: true,
    sameSite: "Lax",
    secure: config.nodeEnv === "production",
  });
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
  .post("/login", async (c) => {
    const payload = c.req.formData();
    const parsedPayload = await z.safeParseAsync(
      z.object({
        email: z.email(),
        password: z.string().min(8),
      }),
      payload
    );

    if (!parsedPayload.success) {
      const lines: string[] = [];
      for (const issue of parsedPayload.error.issues) {
        const key = issue.path[0];
        if (key === "email") {
          lines.push("올바른 이메일 주소를 입력해 주세요.");
        } else if (key === "password") {
          lines.push("비밀번호는 8자 이상 입력해 주세요.");
        } else {
          lines.push(issue.message);
        }
      }
      const message =
        lines.length > 0
          ? Array.from(new Set(lines)).join(" ")
          : "입력값을 확인해 주세요.";
      setLoginFlashCookie(c, message);
      return c.redirect("/auth/login", 302);
    }

    const authResponse = await auth.api.signInEmail({
      body: parsedPayload.data,
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

    setLoginFlashCookie(c, message);
    return c.redirect("/auth/login", 302);
  })
  .post("/logout", async (c) => {
    await auth.api.signOut({
      headers: c.req.raw.headers,
    });
    return c.redirect("/", 302);
  });

export default authRoute;
