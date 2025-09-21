interface EtalaseTenantPageProps {
  params: {
    subdomain: string;
  };
}

export default async function EtalaseTenantPage({ params }: EtalaseTenantPageProps) {
  const { subdomain } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Etalase : {subdomain}</h1>
      <p>loading..</p>
    </div>
  );
}
