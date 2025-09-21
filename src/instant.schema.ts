// Docs: https://www.instantdb.com/docs/modeling-data

import { i } from "@instantdb/react";

const _schema = i.schema({
  // We inferred 2 attributes!
  // Take a look at this schema, and if everything looks good,
  // run `push schema` again to enforce the types.
  entities: {
    $files: i.entity({
      path: i.string().unique().indexed(),
      url: i.string(),
    }),
    $users: i.entity({
      email: i.string().unique().indexed().optional(),
    }),
    categories: i.entity({
      name: i.string(),
      slug: i.string().indexed(),
    }),
    plans: i.entity({
      features: i.json(),
      max_products: i.number(),
      name: i.string().indexed(),
      price: i.number(),
    }),
    product_images: i.entity({
      alt: i.string().optional(),
      url: i.string(),
    }),
    products: i.entity({
      created_at: i.date(),
      deleted_at: i.date().optional(),
      descriptions: i.string().optional(),
      isActive: i.boolean(),
      name: i.string(),
      price: i.number(),
      slug: i.string().unique().indexed(),
      stock: i.number().optional(),
    }),
    tenant_config: i.entity({
      gateway_api_key: i.string().optional(),
      payment_method: i.string().optional(),
      theme: i.json().optional(),
    }),
    tenant_members: i.entity({
      role: i.string(),
    }),
    tenants: i.entity({
      createdAt: i.date(),
      name: i.string().unique(),
      slug: i.string().unique().indexed(),
    }),
    transaction_items: i.entity({
      price: i.number(),
      qty: i.number(),
    }),
    transactions: i.entity({
      created_at: i.date(),
      invoice_number: i.string(),
      payment_method: i.string().optional(),
      status: i.string().indexed(),
      total: i.number(),
    }),
    user_profiles: i.entity({
      avatar_url: i.string().optional(),
      bio: i.string().optional(),
      instagram: i.string().optional(),
      location: i.string().optional(),
      name: i.string(),
      tiktok: i.string().optional(),
      whatsapp: i.string().optional(),
      created_at: i.date(),
    }),
  },
  links: {
    categoriesTenant: {
      forward: {
        on: "categories",
        has: "one",
        label: "tenant",
        required: true,
      },
      reverse: {
        on: "tenants",
        has: "many",
        label: "categories",
      },
    },
    product_imagesProduct: {
      forward: {
        on: "product_images",
        has: "one",
        label: "product",
        onDelete: "cascade",
      },
      reverse: {
        on: "products",
        has: "many",
        label: "product_images",
      },
    },
    productsCategory: {
      forward: {
        on: "products",
        has: "one",
        label: "category",
        required: true,
      },
      reverse: {
        on: "categories",
        has: "many",
        label: "products",
      },
    },
    productsTenant: {
      forward: {
        on: "products",
        has: "one",
        label: "tenant",
        required: true,
      },
      reverse: {
        on: "tenants",
        has: "many",
        label: "products",
      },
    },
    tenant_configTenant: {
      forward: {
        on: "tenant_config",
        has: "one",
        label: "tenant",
        onDelete: "cascade",
      },
      reverse: {
        on: "tenants",
        has: "one",
        label: "tenant_config",
      },
    },
    tenant_membersMemberships: {
      forward: {
        on: "tenant_members",
        has: "one",
        label: "memberships",
        required: true,
      },
      reverse: {
        on: "$users",
        has: "many",
        label: "tenant_members",
      },
    },
    tenant_membersTenant: {
      forward: {
        on: "tenant_members",
        has: "many",
        label: "tenant",
        required: true,
      },
      reverse: {
        on: "tenants",
        has: "one",
        label: "tenant_members",
      },
    },
    tenantsOwner: {
      forward: {
        on: "tenants",
        has: "one",
        label: "owner",
        required: true,
      },
      reverse: {
        on: "$users",
        has: "many",
        label: "tenants",
      },
    },
    tenantsPlan: {
      forward: {
        on: "tenants",
        has: "one",
        label: "plan",
        required: true,
      },
      reverse: {
        on: "plans",
        has: "many",
        label: "tenants",
      },
    },
    transaction_itemsProduct: {
      forward: {
        on: "transaction_items",
        has: "one",
        label: "product",
        required: true,
      },
      reverse: {
        on: "products",
        has: "many",
        label: "transaction_items",
      },
    },
    transaction_itemsTenant: {
      forward: {
        on: "transaction_items",
        has: "many",
        label: "tenant",
        required: true,
      },
      reverse: {
        on: "tenants",
        has: "one",
        label: "transaction_items",
      },
    },
    transactionsItems: {
      forward: {
        on: "transactions",
        has: "many",
        label: "items",
        required: true,
      },
      reverse: {
        on: "transaction_items",
        has: "one",
        label: "transaction",
        onDelete: "cascade",
      },
    },
    transactionsTenant: {
      forward: {
        on: "transactions",
        has: "many",
        label: "tenant",
        required: true,
      },
      reverse: {
        on: "tenants",
        has: "one",
        label: "transactions",
      },
    },
    transactionsUser: {
      forward: {
        on: "transactions",
        has: "many",
        label: "user",
        required: true,
      },
      reverse: {
        on: "$users",
        has: "one",
        label: "transactions",
      },
    },
    user_profiles$users: {
      forward: {
        on: "user_profiles",
        has: "one",
        label: "$users",
        onDelete: "cascade",
      },
      reverse: {
        on: "$users",
        has: "one",
        label: "user_profiles",
      },
    },
  },
  rooms: {
    todos: {
      presence: i.entity({}),
    },
  },
});

// This helps Typescript display nicer intellisense
type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
