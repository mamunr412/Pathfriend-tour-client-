import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/UsefireBase';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const allAuth = useFirebase();

    return (
        <AuthContext.Provider value={allAuth}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;