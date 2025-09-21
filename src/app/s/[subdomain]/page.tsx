
interface PageProps {
  
}

export default async function EtalaseTenantPage({ params }: { params: { subdomain: string } }) {
    const subdomain = params.subdomain;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        ETALASEE ONLINE {subdomain}
      </h1>
      <p>loading..</p>
    </div>
  );
}