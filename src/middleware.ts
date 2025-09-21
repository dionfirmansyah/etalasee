import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';
  const mainDomain = process.env.NEXT_PUBLIC_MAIN_DOMAIN || 'etalasee.online';

  // root domain (etalasee.online / www.etalasee.online / localhost)
  if (host === mainDomain || host === `www.${mainDomain}` || host.startsWith('localhost')) {
    return NextResponse.next();
  }

  // subdomain tenant
  if (host.endsWith(`.${mainDomain}`)) {
    const tenant = host.replace(`.${mainDomain}`, '');
    const res = NextResponse.next();
    res.headers.set('x-tenant', tenant);
    return res;
  }

  // fallback
  url.pathname = '/landing';
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|static|favicon.ico).*)'],
};
