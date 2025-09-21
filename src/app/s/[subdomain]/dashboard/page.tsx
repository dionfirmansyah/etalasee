interface DashboardTenantPageProps {
  params: {
    subdomain: Promise<string | undefined>;
  };
}

export default async function DashboardTenantPage({ params }: DashboardTenantPageProps) {
  const subdomain = params.subdomain;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">DASHBOARD : {subdomain}</h1>
      <p>loading..</p>
    </div>
  );
}