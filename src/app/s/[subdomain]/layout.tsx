import { getCachedEtalaseData } from '@/lib/subdomains';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Toaster } from 'sonner';
import '../../globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export async function generateMetadata({ params }: { params: Promise<{ subdomain: string }> }): Promise<Metadata> {
    const { subdomain } = await params;
    const data = await getCachedEtalaseData(subdomain);

    const { name: title, info, description } = data;

    return {
        title: `${title}`,
        description: `${description}`,
        openGraph: {
            title: `${title}`,
            description: `${description}`,
        },
        twitter: {
            title: `${title}`,
            description: `${description}`,
        },
        icons: {
            icon: `${info?.favicon ?? '/favicon.ico'}`,
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ subdomain: string }>;
}>) {
    const { subdomain } = await params;
    const data = await getCachedEtalaseData(subdomain);
    const { info } = data;
    return (
        <html lang="id" suppressHydrationWarning={true} className={info?.theme}>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                suppressContentEditableWarning={true}
            >
                <div className="container mx-auto max-w-4xl">{children}</div>
                <Toaster richColors />
            </body>
        </html>
    );
}
