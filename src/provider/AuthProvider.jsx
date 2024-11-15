
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [users,setUser]=useState(null)
    // create user
    const createNewUser=( email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log out user
    const logOutUser=()=>{
        signOut(auth).then((res) => {
           console.log(res);
          }).catch((error) => {
            console.log(error);
          });
    }
    // on auth change
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (user)=>{
            setUser(user);
        } )
    return ()=> unsubscribe()
},[])
    const info={
        setUser,
        users,
        createNewUser,
        signInUser,
        logOutUser
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