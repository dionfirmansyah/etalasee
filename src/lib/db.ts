import { init as initServer } from '@instantdb/admin';
import { init, InstaQLEntity } from '@instantdb/react';
import schema from '../instant.schema';

export const db = init({
    appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
    schema,
    useDateObjects: true,
});

export const dbServer = initServer({
    appId: process.env.NEXT_PUBLIC_INSTANT_APP_ID!,
    schema,
    useDateObjects: true,
    adminToken: process.env.INSTANT_APP_ADMIN_TOKEN!,
});

export type User = InstaQLEntity<typeof schema, '$users'>;
export type Profile = InstaQLEntity<typeof schema, 'user_profiles'>;
export type Product = InstaQLEntity<typeof schema, 'products'>;
export type Subscription = InstaQLEntity<typeof schema, 'subscriptions'>;
export type Plan = InstaQLEntity<typeof schema, 'plans'>;
export type Info = InstaQLEntity<typeof schema, 'tenant_info'>;

export type Tenant = InstaQLEntity<
    typeof schema,
    'tenants',
    {
        owner: { user_profiles: {} };
        products: {};
        subscription: { plan: {} };
        info: {};
    }
>;
