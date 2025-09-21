export default async function EtalaseTenantPage(
  { params }: { params: { subdomain: string } }
) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Etalase: {params.subdomain}</h1>
      <p>loading..</p>
    </div>
  );
}
