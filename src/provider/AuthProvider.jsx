
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [users,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    // create user
    const createNewUser=( email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // reset password
    const resetPassword=(email)=>{
        // console.log(email);
        sendPasswordResetEmail(auth, email)
  .then(() => {
    // console.log(res);
  })
  .catch(() => {
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // console.log(errorCode,errorMessage);
  })
    }


    // update user profile
    const updateUser=(updateData)=>{
        // console.log(updateData);
        return updateProfile(auth.currentUser, updateData)
    }


    
    // log out user
    const logOutUser=()=>{
        setLoader(true)
        signOut(auth)
    }
    // on auth change
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoader(false)
        } )
    return ()=> unsubscribe()
},[])
    const info={
        setUser,
        users,
        createNewUser,
        signInUser,
        logOutUser,
        resetPassword,
        updateUser,
        loader
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


AuthProvider.propTypes = {
    children:PropTypes.object.isRequired
};

export default AuthProvider;