import { drizzle } from "drizzle-orm/node-postgres";
import relations from "@/db/relations";
import config from "@/config";

export const db = drizzle(config.databaseUrl, { relations });
