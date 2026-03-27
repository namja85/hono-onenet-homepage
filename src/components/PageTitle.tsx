import { PropsWithChildren } from "hono/jsx";

interface PageTitleProps extends PropsWithChildren {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div class="p-4">
      <h1 class="text-2xl/20 md:text-5xl/20 font-bold text-white text-center">
        {title}
      </h1>
      {description && (
        <p class="text-base/6 md:text-lg text-neutral-200 text-center">
          {description}
        </p>
      )}
    </div>
  );
}
