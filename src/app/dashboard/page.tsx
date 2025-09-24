'use client';
import { useOAuthIDB } from '@/hooks/useOAuthIDB';

export default function Page() {
    const { logout } = useOAuthIDB();
    return (
        <div>
            <p>halaman dashboard</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
