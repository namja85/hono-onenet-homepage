import { PropsWithChildren } from "hono/jsx";
import FileDown from "@/components/icons/FileDown";
import { formatDateYmd, getBoardTypeLabel } from "@/lib/utils";

interface ListItemProps extends PropsWithChildren {
  type: "notice" | "download";
  title: string;
  date: string | Date;
  href?: string;
  hasFile?: boolean;
}

export default function ListItem({
  type,
  title,
  date,
  href = "#",
  hasFile = false,
}: ListItemProps) {
  return (
    <li>
      <a href={href}>
        <div class="border border-neutral-400 rounded-xl p-4 md:p-8 space-y-2 md:space-y-4 hover:border-blue-900 transition-colors duration-300">
          <div class="flex md:items-center gap-1 md:gap-2">
            <span class="text-base/6 md:text-xl text-blue-900 font-bold">
              {getBoardTypeLabel(type)}
            </span>
            <span class="text-base/6 md:text-xl">{formatDateYmd(date)}</span>
          </div>
          <div class="flex items-start md:items-center gap-1 md:gap-2">
            <span class="text-base/6 md:text-xl font-bold">{title}</span>
            {hasFile && <FileDown />}
          </div>
        </div>
      </a>
    </li>
  );
}
