import { PropsWithChildren } from "hono/jsx";

interface PageTitleProps extends PropsWithChildren {
  title: string;
  description: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div>
      <h1 class="text-5xl/20 font-bold text-white text-center">{title}</h1>
      <p class="text-lg text-neutral-200 text-center">{description}</p>
    </div>
  );
}
