import TenantInfo from '@/components/tenant-info';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getCachedEtalaseData } from '@/lib/subdomains';
import { ListFilter, Search } from 'lucide-react';

export default async function EtalasePage({ params }: { params: Promise<{ subdomain: string }> }) {
    const { subdomain } = await params;
    const data = await getCachedEtalaseData(subdomain);

    const { products, name, description, info, owner } = data;

    return (
        <>
            {/* <header className="border-primary w-full border-b">
                <div className="flex items-center gap-2 px-4 py-4">
                    {info?.logo && <Image src={info.logo} alt={`${data.subdomain}-logo`} width={30} height={30} />}
                    <h1 className="text-xl font-bold text-black">{name}</h1>
                </div>
            </header> */}
            <section className="flex min-h-screen items-center justify-center" id="tenant-info">
                <TenantInfo name={name} info={info!} description={description!} />
            </section>

            <section className="mt-4 min-h-screen px-4 py-4 pb-4" id="products">
                <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                        <Search size={20} className="text-primary absolute top-1/2 left-3 -translate-y-1/2 transform" />
                        <Input
                            type="text"
                            placeholder="Search products"
                            className="border-primary w-full py-3 pr-4 pl-10"
                        />
                    </div>
                    <Button variant="custom" size={'icon'} className="rounded-md">
                        <ListFilter size={20} className="text-primary" />
                    </Button>
                </div>
            </section>
        </>
    );
}
