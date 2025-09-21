import { db, User } from '@/lib/db';

import { id } from '@instantdb/react';
import { useCallback, useMemo } from 'react';
import { toast } from 'sonner';

interface JWTPayload {
    email: string;
    picture?: string;
    name: string;
}

export const useOAuthIDB = ( ) => {
    const timestamp = new Date();
    const nonce = crypto.randomUUID();  

    const {user: userLoggedIn, isLoading, error} = db.useAuth();

    const queryGetProfile = {
        user_profiles:{$:{where:{user_id:userLoggedIn?.id}, limit:1}}
    }

    const userPofiles = db.useQuery(queryGetProfile)

    const user = useMemo(()=>{
        if(!userLoggedIn){
            return null
        }
        return {
            ...userLoggedIn,
            ...userPofiles.data?.user_profiles[0]
        }
    },[userLoggedIn,userPofiles])
    
    const addUserProfile = useCallback( async(newUser:JWTPayload, userId:string)=>{
            if(userLoggedIn || userId === null){
                return;
            }
             try {
                
                await db.transact([db.tx.user_profiles[id()].create({
                    name:newUser.name,
                    avatar_url:newUser.picture,
                    created_at: timestamp,
                }).link({$users:userId})])
        
            } catch (error) {
                console.error('Failed to add new user profile:', error);
                throw new Error('Profile creation failed');
            }
        },[userLoggedIn])



    const handleGoogleSuccess = useCallback(
        async (credentialResponse: any): Promise<void> => {
            try {
                const credential = credentialResponse?.credential;
                if (!credential) {
                    throw new Error('No credential received from Google');
                }

                const parsedToken = parseIdToken(credential);

                const { user } = await db.auth.signInWithIdToken({
                    clientName: 'google-web',
                    idToken: credential,
                    nonce: nonce,
                }); 

                await addUserProfile(parsedToken, user.id);
                toast.success('Login berhasil');
            } catch (error: any) {
                const errorMessage = error.body?.message || error.message || 'Login failed';
                toast.error(`Login gagal: ${errorMessage}`);
            }
        },
        [nonce, addUserProfile],
    );

    const handleGoogleError = useCallback((): void => {
        toast.error('Login Google gagal. Silakan coba lagi.');
    }, []);

    const logout = useCallback(() => {
        db.auth.signOut();
    }, []);

    return {
       user,
       isLoading,
       error,
       nonce,
       logout,
       handleGoogleSuccess,
       handleGoogleError,
    };

};



 const parseIdToken = (idToken: string): JWTPayload => {
    try {
        const base64Payload = idToken.split('.')[1];
        const decoded = atob(base64Payload);
        return JSON.parse(decoded);
    } catch {
        throw new Error('Invalid JWT token format');
    }
};

