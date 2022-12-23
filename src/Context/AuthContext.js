import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext, createContext } from 'react'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }

    const[currentUser, setCurrentUser] = useState({})

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
            console.log(user)
        })

        return () => {
            unsub()
        }
    },[]);
    
    return(
        <AuthContext.Provider value={{currentUser, googleSignIn}}>
            {children}
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
