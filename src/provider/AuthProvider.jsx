
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    // create user
    const createNewUser=( email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const info={
        setUser,
        createNewUser
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