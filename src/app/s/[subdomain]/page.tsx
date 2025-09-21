import { NextPage } from "next";

const EtalaseTenantPage: NextPage<{ params: { subdomain: string } }> = async ({ params }) => {
    const subdomain =  params.subdomain;


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Etalase:  {subdomain}
      </h1>
      <p>loading..</p>
    </div>
  );
}

export default EtalaseTenantPage;