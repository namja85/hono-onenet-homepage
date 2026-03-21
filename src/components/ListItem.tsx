import { format } from "date-fns";
import { PropsWithChildren } from "hono/jsx";
import FileDown from "@/components/icons/FileDown";

interface ListItemProps extends PropsWithChildren {
  type: "notice" | "download";
  title: string;
  date: string;
}

export default function ListItem({ type, title, date }: ListItemProps) {
  return (
    <li>
      <div class="border border-neutral-400 rounded-xl p-4 md:p-8 space-y-2 md:space-y-4 hover:border-blue-900 transition-colors duration-300">
        <div class="flex md:items-center gap-1 md:gap-2">
          <span class="text-base/6 md:text-xl text-blue-900 font-bold">
            {type === "notice" ? "공지사항" : "자료실"}
          </span>
          <span class="text-base/6 md:text-xl">
            {format(new Date(date), "yyyy-MM-dd")}
          </span>
        </div>
        <a href={`#`} class="flex items-start md:items-center gap-1 md:gap-2">
          <span class="text-base/6 md:text-xl font-bold">{title}</span>
          {type === "download" && <FileDown />}
        </a>
      </div>
    </li>
  );
}
