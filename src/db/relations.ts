import { defineRelations } from "drizzle-orm/relations";
import * as schema from "@/db/schema";

const relations = defineRelations(schema, (r) => ({
  boards: {
    file: r.one.files({ from: r.boards.id, to: r.files.boardId }),
  },
  files: {
    board: r.one.boards({ from: r.files.boardId, to: r.boards.id }),
  },
}));

export default relations;
