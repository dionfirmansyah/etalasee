import LoginCard from '@/components/auth/login-card';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface PageProps {}

export default function Page({}: PageProps) {
    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <LoginCard />
        </GoogleOAuthProvider>
    );
}
