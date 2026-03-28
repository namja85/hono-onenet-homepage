import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import config from "@/config";

const authBaseOrigins: string[] = [];
if (process.env.BETTER_AUTH_URL) {
  try {
    authBaseOrigins.push(new URL(process.env.BETTER_AUTH_URL).origin);
  } catch {
    /* ignore invalid BETTER_AUTH_URL */
  }
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  trustedOrigins: [config.siteOrigin, ...authBaseOrigins],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [...(config.nodeEnv === "development" ? [openAPI()] : [])],
});
