import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,updateProfile,onAuthStateChanged    } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "./firebase.init";

initializeAuthentication();

const useFirebase = ()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();

    

    const signInUsingGoogle = ()=>{
        setIsLoading(true);
        const googleProvider= new GoogleAuthProvider();
       return signInWithPopup(auth,googleProvider)
        
        
    }

    const setUserName=(name)=>{
        updateProfile(auth.currentUser,{displayName:name})
        .then(result=>{})
    }

    const registerUsingEmailAndPassword=(name,email,pass)=>{
        setIsLoading(true);

        createUserWithEmailAndPassword(auth,email,pass)
        .then(result=>{
            const user=result.user;
            setUserName(name);
            setUser(user);
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }

        useEffect(()=>{
                onAuthStateChanged(auth,user=>{
                    if(user){
                        setUser(user)
                    }
                    setIsLoading(false)
                })
            },[])

    const signInUsingEmailAndPassword=(email,pass)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
        
    }

    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>setIsLoading(false))
    }

    return {
        user,
        error,
        setError,
        signInUsingGoogle,
        registerUsingEmailAndPassword,
        signInUsingEmailAndPassword,
        logOut,
        isLoading
    }

}
export default useFirebase;