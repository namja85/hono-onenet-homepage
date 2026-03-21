import { PropsWithChildren, Fragment } from "hono/jsx";

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return <Fragment>{children}</Fragment>;
}
