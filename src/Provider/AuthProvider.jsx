import React, { createContext,useEffect,useState } from 'react';
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const[loading,setLoading] = useState(false)
    console.log(loading,user);

    //create new user
    const createNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //sign with pop up
    const signInWithGoogle =()=>{
        
        return signInWithPopup(auth,provider);
    }

    //logOut
    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }

    //signInWithEmail
    const signInWithEmail =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo={
        user,
        setUser,
        createNewUser,
        signInWithGoogle,
        logOut,
        signInWithEmail,
        loading
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;