import AppProvider from "@/components/app-provider";
import { getTenant } from "@/lib/tenant";

interface PageProps {
  
}

export default function Page({}: PageProps) {
    const subdomain = getTenant();
  return (

    <AppProvider>
      <div className="p-6">
      <h1 className="text-2xl font-bold">
        Dashboard Tenant: {subdomain}
      </h1>
      <p>Selamat datang di dashboard {subdomain} 🎉</p>
    </div>
    </AppProvider>
  );
}