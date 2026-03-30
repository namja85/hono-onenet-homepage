import { z } from "zod";

const configSchema = z.object({
  nodeEnv: z.enum(["development", "production"]).default("development"),
  siteOrigin: z.url(),
  databaseUrl: z.string(),
  awsSesRegion: z.string().min(1),
  awsSesAccessKey: z.string().min(1),
  awsSesSecretKey: z.string().min(1),
  awsSesFromAddress: z.email(),
});

const config = configSchema.parse({
  nodeEnv: process.env.NODE_ENV,
  siteOrigin: process.env.SITE_ORIGIN,
  databaseUrl: process.env.DATABASE_URL,
  awsSesRegion: process.env.AWS_SES_REGION,
  awsSesAccessKey: process.env.AWS_SES_ACCESS_KEY,
  awsSesSecretKey: process.env.AWS_SES_SECRET_KEY,
  awsSesFromAddress: process.env.AWS_SES_FROM_ADDRESS,
});

export default config;
