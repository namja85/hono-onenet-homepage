import { z } from "zod";

const configSchema = z.object({
  nodeEnv: z.enum(["development", "production"]).default("development"),
  siteOrigin: z.url(),
  databaseUrl: z.string(),
});

const config = configSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  siteOrigin: process.env.SITE_ORIGIN,
  databaseUrl: process.env.DATABASE_URL,
});

export default config;
