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
      <div class="border border-neutral-400 rounded-xl p-8 space-y-4 hover:border-blue-900 transition-colors duration-300">
        <div class="flex items-center gap-2">
          <span class="text-xl text-blue-900 font-bold">
            {type === "notice" ? "공지사항" : "자료실"}
          </span>
          <span class="text-xl">{format(new Date(date), "yyyy-MM-dd")}</span>
        </div>
        <a href={`#`} class="flex items-center gap-2">
          <span class="text-xl font-bold">{title}</span>
          {type === "download" && <FileDown />}
        </a>
      </div>
    </li>
  );
}
