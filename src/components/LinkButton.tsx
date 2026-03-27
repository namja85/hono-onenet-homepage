import { PropsWithChildren } from "hono/jsx";

interface LinkButtonProps extends PropsWithChildren {
  href: string;
  class?: string;
}

export default function LinkButton({
  href,
  children,
  class: cls,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      class={`border border-neutral-300 bg-neutral-100 text-neutral-800 px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors duration-300 inline-flex gap-2 items-center ${
        cls ?? ""
      }`}
    >
      {children}
    </a>
  );
}
