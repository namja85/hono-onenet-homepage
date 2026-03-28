import { drizzle } from "drizzle-orm/node-postgres";
import relations from "@/db/relations";
import * as schema from "@/db/schema";
import config from "@/config";

export const db = drizzle(config.databaseUrl, { schema, relations });
