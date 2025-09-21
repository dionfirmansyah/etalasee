'use client'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { db } from '@/lib/db';
import LoginCard from "./auth/login-card";
interface AppProviderProps {
  children: React.ReactNode;
}

export default function AppProvider({children}: AppProviderProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        <db.SignedIn>
            {children}
        </db.SignedIn>
        <db.SignedOut>
            <LoginCard/>
        </db.SignedOut>
    </GoogleOAuthProvider>
  );
}