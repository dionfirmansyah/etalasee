import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const protocol =
  process.env.NODE_ENV === 'production' ? 'https' : 'http';
export const rootDomain =
  process.env.NEXT_PUBLIC_BASE_DOMAIN || 'etalasee.online';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slug(text: string):string {
  return text.toLowerCase().replace(/\s+/g, "-")
}