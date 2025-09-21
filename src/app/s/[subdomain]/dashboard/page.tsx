import { NextPage } from "next";

const DashboardTenantPage: NextPage<{ params: { subdomain: string } }> = async ({ params }) => {
    const subdomain =  params.subdomain;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        DASHBOARD :  {subdomain}
      </h1>
      <p>loading..</p>
    </div>
  );
}

export default DashboardTenantPage;