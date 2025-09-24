import { cache } from 'react';
import { dbServer, Tenant } from './db';
import { slug } from './utils';

export async function getSubdomainData(subdomain: string) {
    const sanitizedSubdomain = slug(subdomain);

    const data = await dbServer.query({
        tenants: {
            $: { fields: ['name', 'subdomain', 'description'], where: { subdomain: sanitizedSubdomain } },
            owner: { user_profiles: { $: { fields: ['name', 'avatar_url', 'bio'] } } },
            products: {},
            subscription: { $: { fields: ['isPaid'] }, plan: { $: { fields: ['name'] } } },
            info: {
                $: {
                    fields: ['google_map', 'instagram', 'location', 'tiktok', 'whatsapp', 'theme', 'favicon', 'logo'],
                },
            },
        },
    });

    return data.tenants[0] as Tenant;
}

export const getCachedEtalaseData = cache(async (subdomain: string) => await getSubdomainData(subdomain));

export async function getAllSubdomainData() {
    const data = await dbServer.query({ tenants: { $: { fields: ['subdomain'] } } });

    return data?.tenants;
}

export async function isValidSlug(slug: string | undefined): Promise<{ valid: boolean }> {
    if (!slug) return { valid: false };

    try {
        const tenants = await getAllSubdomainData();

        const subdomains = tenants.map((t) => t.subdomain as string);
        return { valid: subdomains.includes(slug) };
    } catch (err) {
        console.error('InstantDB error:', err);
        return { valid: false };
    }
}
