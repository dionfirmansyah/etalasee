interface DashboardTenantPageProps {
  params: {
    subdomain: string;
  };
}

export default async function DashboardTenantPage({ params }: DashboardTenantPageProps) {
  const { subdomain } = params;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">DASHBOARD : {subdomain}</h1>
      <p>loading..</p>
    </div>
  );
}
