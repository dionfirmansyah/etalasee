import { init, InstaQLEntity } from "@instantdb/react";
import schema from "../instant.schema";

export const db = init({
  appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
  schema,
  useDateObjects: true,
});

export type User = InstaQLEntity<typeof schema, '$users'>;
export type Profile = InstaQLEntity<typeof schema, 'user_profiles'>;