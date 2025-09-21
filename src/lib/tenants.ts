import { headers } from 'next/headers'

export interface TenantInfo {
  subdomain: string
  name: string
  theme?: {
    primaryColor: string
    logo?: string
  }
}

export async function getCurrentTenant(): Promise<TenantInfo | null> {
  const headersList = headers()
  const subdomain = (await headersList).get('x-tenant')
  
  if (!subdomain) {
    return null
  }
  
  // Fetch tenant info from database or API
  // Untuk sekarang, return mock data
  return getTenantInfo(subdomain)
}

export function getTenantInfo(subdomain: string): TenantInfo {
  // Mock data - ganti dengan database query
  const tenants: Record<string, TenantInfo> = {
    demo: {
      subdomain: 'demo',
      name: 'Demo Company',
      theme: {
        primaryColor: '#3b82f6',
      }
    },
    client1: {
      subdomain: 'client1',
      name: 'Client One Corp',
      theme: {
        primaryColor: '#10b981',
      }
    },
    client2: {
      subdomain: 'client2',
      name: 'Client Two Ltd',
      theme: {
        primaryColor: '#f59e0b',
      }
    }
  }
  
  return tenants[subdomain] || {
    subdomain,
    name: subdomain.charAt(0).toUpperCase() + subdomain.slice(1),
    theme: {
      primaryColor: '#6366f1',
    }
  }
}

export function extractSubdomainFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url)
    const hostname = urlObj.hostname
    const parts = hostname.split('.')
    
    if (parts.length >= 3 && parts[0] !== 'www') {
      return parts[0]
    }
    
    return null
  } catch {
    return null
  }
}