import { PropsWithChildren } from "hono/jsx";

interface LinkButtonProps extends PropsWithChildren {
  href: string;
  class?: string;
}

const layout =
  "inline-flex gap-2 items-center px-4 py-2 rounded-md transition-colors duration-300";
const defaultTone =
  "border border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200";

export default function LinkButton({
  href,
  children,
  class: cls,
}: LinkButtonProps) {
  const appearance = cls ? cls : defaultTone;
  return (
    <a href={href} class={`${layout} ${appearance}`}>
      {children}
    </a>
  );
}
