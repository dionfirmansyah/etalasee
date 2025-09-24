'use server';

import { dbServer } from '@/lib/db';
import { protocol, rootDomain, slug } from '@/lib/utils';
import { id } from '@instantdb/admin';
import { redirect } from 'next/navigation';

export async function createTenant(
    formData: FormData,
    userId: string,
    plan: string = 'daf24b9c-9252-41fd-8397-1cb9b5f11d39',
    role: string = 'owner',
) {
    let subdomain = '';
    try {
        // cek apakah user sudah punya tenant
        const data = await dbServer.query({
            tenants: { $: { where: { owner: userId }, limit: 1 } },
        });

        if (data.tenants?.length) {
            return;
        }

        const tenantId = id();
        subdomain = slug(formData.get('name') as string);

        await dbServer.transact([
            dbServer.tx.tenants[tenantId]
                .create({
                    name: formData.get('name') as string,
                    slug: subdomain,
                    createdAt: new Date(),
                })
                .link({ owner: userId, plan }),
            dbServer.tx.tenant_members[id()]
                .create({
                    role,
                })
                .link({ tenant: tenantId, memberships: userId }),
        ]);
    } catch (error) {
        throw new Error('Invalid Create New Tenant');
    } finally {
        redirect(`${protocol}://${subdomain}.${rootDomain}/dashboard`);
    }
}
