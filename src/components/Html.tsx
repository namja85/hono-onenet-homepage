import { PropsWithChildren } from "hono/jsx";

interface HtmlProps extends PropsWithChildren {}

export default function Html({ children }: HtmlProps) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>원넷</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
