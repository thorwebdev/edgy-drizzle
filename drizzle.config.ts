import type { Config } from "drizzle-kit";
export default {
  schema: "./schema.ts",
  out: "./supabase/migrations",
} satisfies Config;
