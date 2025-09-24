import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { isValidSlug } from './lib/subdomains';
import { rootDomain } from './lib/utils';

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const host = request.headers.get('host');
    const subdomain = host?.split('.')[0];

    if (subdomain === 'www' || subdomain === rootDomain) {
        return NextResponse.next();
    }

    const clientData = await isValidSlug(subdomain);

    if (!clientData.valid) {
        return NextResponse.rewrite(new URL('/not-found', request.url));
    }

    // if (!clientData.isSubscribed) {
    //     return NextResponse.redirect(new URL(`${url.protocol}//${rootDomain}/plan-expired`, request.url));
    // }

    return NextResponse.rewrite(new URL(`/s/${subdomain}${url.pathname}${url.search}${url.hash}`, request.url));
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
