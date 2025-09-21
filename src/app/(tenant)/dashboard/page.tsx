// app/(tenant)/dashboard/page.tsx
import { getTenant } from '@/lib/tenant';

export default function DashboardPage() {
  const tenant = getTenant();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Dashboard Tenant: {tenant}
      </h1>
      <p>Selamat datang di dashboard {tenant} 🎉</p>
    </div>
  );
}
