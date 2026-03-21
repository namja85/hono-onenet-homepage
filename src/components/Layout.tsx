import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "hono/jsx";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
