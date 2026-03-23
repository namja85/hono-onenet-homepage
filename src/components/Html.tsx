import { PropsWithChildren } from "hono/jsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/config";

interface HtmlProps extends PropsWithChildren {
  title: string;
  description: string;
  pathname: string;
}

export default function Html({
  title,
  description,
  pathname,
  children,
}: HtmlProps) {
  const ogImageUrl = "/public/images/opengraph.png";
  const siteOrigin = config.nodeEnv === "production" ? config.siteOrigin : "";
  const ogImage = siteOrigin ? `${siteOrigin}${ogImageUrl}` : ogImageUrl;
  const ogUrl = siteOrigin ? `${siteOrigin}${pathname}` : "";

  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        {ogUrl ? <meta property="og:url" content={ogUrl} /> : null}
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="원넷" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico?v=2" />
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
