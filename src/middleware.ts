import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const domain = process.env.NEXT_PUBLIC_MAIN_DOMAIN || 'localhost:3000';

  // ambil subdomain -> tenant1.localhost:3000 => "tenant1"
  let tenant = '';
  if (host.includes(domain)) {
    tenant = host.replace(`.${domain}`, '');
  }

  // kalau tidak ada tenant, arahkan ke landing page
  if (!tenant || tenant === domain) {
    url.pathname = '/landing';
    return NextResponse.rewrite(url);
  }

  // tambahkan tenant ke headers agar bisa diakses di app
  const res = NextResponse.next();
  res.headers.set('x-tenant', tenant);

  return res;
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
