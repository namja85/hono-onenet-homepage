import { bytea, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const boards = pgTable("boards", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  type: text("type").notNull(), // notice: 공지사항, download: 자료실
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const files = pgTable("files", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  boardId: integer("board_id").references(() => boards.id, {
    onDelete: "cascade",
  }),
  name: text("name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  data: bytea("data").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export type BoardType = typeof boards.$inferSelect;
export type FileType = typeof files.$inferSelect;
