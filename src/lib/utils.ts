import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slug(text: string):string {
  return text.toLowerCase().replace(/\s+/g, "-")
}