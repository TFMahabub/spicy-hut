import app from '@/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
// import { createContext } from 'vm';


export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const UserAuthentication = ({ children }: any) => {
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true)


    //register-
    const register = (email: string, password: string) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //update profile-
    const updateUser = (userName: string) => {
        return updateProfile(auth.currentUser, {
            displayName: userName
        })
    }

    //login
    const logIn = (email: string, password: string) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logInWithGoogle
    const logInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // logOut
    const logOut = () => {
        return signOut(auth)
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    const authInfo = {
        user,
        register,
        updateUser,
        logIn,
        logInWithGoogle,
        logOut,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserAuthentication;