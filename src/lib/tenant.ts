import { headers } from 'next/headers';

export async function getTenant() {
  const h = await headers();
  const subdomain = h.get('x-tenant');
  return subdomain || null;
}
