import Header from "./Header";
import { PropsWithChildren } from "hono/jsx";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
