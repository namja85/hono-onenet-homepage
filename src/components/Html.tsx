import { PropsWithChildren } from "hono/jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface HtmlProps extends PropsWithChildren {}

export default function Html({ children }: HtmlProps) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>원넷</title>
        <link rel="icon" href="/favicon.ico?v=1" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <script src="/public/js/main.js" type="module" defer></script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
