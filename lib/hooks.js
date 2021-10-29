import { auth, firestore} from '../lib/firebaseInit';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        if(user) { 
            const ref = firestore.collection('users').doc(user.uid);
            console.log(user)
        } else {
            setUsername(null);
        }
    }, [user]);

    return { user, username };
}