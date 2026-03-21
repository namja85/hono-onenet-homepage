import { PropsWithChildren } from "hono/jsx";

interface ListProps extends PropsWithChildren {
  class?: string;
}

export default function List({ children, class: cls }: ListProps) {
  return (
    <div>
      <ul class={`space-y-2 md:space-y-4 ${cls ?? ""}`}>{children}</ul>
    </div>
  );
}
