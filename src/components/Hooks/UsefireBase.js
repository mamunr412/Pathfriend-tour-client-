import firebaseInit from "../Firebase/Firebaseinit";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

firebaseInit()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isloading, setIsloading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsloading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // observer 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });

    }, []);
    // logout 
    const logOut = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsloading(false))
    }

    return {
        user,
        isloading,
        setIsloading,
        setUser,
        logOut,
        signInWithGoogle
    }
}
export default useFirebase;