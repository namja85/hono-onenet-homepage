import { PropsWithChildren } from "hono/jsx";

interface ContainerProps extends PropsWithChildren {
  class?: string;
}

export default function Container({ children, class: cls }: ContainerProps) {
  return (
    <div class={`container max-w-7xl mx-auto ${cls ?? ""}`}>{children}</div>
  );
}
