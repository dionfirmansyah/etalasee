'use client';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

import { Info } from '@/lib/db';
import Link from 'next/link';
import { SiInstagram, SiTiktok, SiWhatsapp } from 'react-icons/si';
import { Button } from './ui/button';

interface TenantInfoProps {
    name: string;
    info: Info;
    description: string;
}

export default function TenantInfo({ name, info, description }: TenantInfoProps) {
    const scrollToProducts = () => {
        document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="flex w-full max-w-lg flex-col items-center gap-2 p-4">
            <div className="rounded-full border-2 p-1">
                <Avatar className="size-24">
                    <AvatarImage src={info.logo} />
                    <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-primary text-xl font-bold">{name}</h1>
                <p className="text-muted-foreground text-sm">{description}</p>
            </div>

            <div className="flex w-full flex-col gap-4 py-4">
                <div className="flex items-center gap-4">
                    <Button variant={'custom'} className="bg-accent p-1" size={'icon'} asChild>
                        <Link href={`https://wa.me/${info.whatsapp}`} target="_blank">
                            <SiWhatsapp className="text-primary text-xs" />
                        </Link>
                    </Button>
                    <Button variant={'custom'} className="bg-accent w-full flex-1" asChild>
                        <Link
                            href={`https://wa.me/${info.whatsapp}`}
                            target="_blank"
                            className="block w-full text-center"
                        >
                            <p className="text-primary text-sm">{name}</p>
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant={'custom'} className="bg-accent p-1" size={'icon'} asChild>
                        <Link href={`https://instagram.com/${info.instagram}`} target="_blank">
                            <SiInstagram className="text-primary text-xs" />
                        </Link>
                    </Button>
                    <Button variant={'custom'} className="bg-accent w-full flex-1" asChild>
                        <Link
                            href={`https://instagram.com/${info.instagram}`}
                            target="_blank"
                            className="block w-full text-center"
                        >
                            <p className="text-primary text-sm">@{info.instagram}</p>
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant={'custom'} className="bg-accent p-1" size={'icon'} asChild>
                        <Link href={`https://tiktok.com/${info.tiktok}`} target="_blank">
                            <SiTiktok className="text-primary text-xs" />
                        </Link>
                    </Button>
                    <Button variant={'custom'} className="bg-accent w-full flex-1" asChild>
                        <Link
                            href={`https://tiktok.com/${info.tiktok}`}
                            target="_blank"
                            className="block w-full text-center"
                        >
                            <p className="text-primary text-sm">@{info.tiktok}</p>
                        </Link>
                    </Button>
                </div>
            </div>

            <Button variant={'custom'} className="w-full flex-1" onClick={scrollToProducts}>
                <p className="text-primary text-sm">Lihat Etalase</p>
            </Button>
        </div>
    );
}
