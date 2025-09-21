
export default async function DashboardTenantPage({ params }: { params: { subdomain: string } }) {
    const subdomain = params.subdomain;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        DASHBOARD :  {subdomain}
      </h1>
      <p>loading..</p>
    </div>
  );
}