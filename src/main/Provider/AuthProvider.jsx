import React, { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "./firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);  
 const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
  
   const registerUser = (name,email,password)=>{
    return createUserWithEmailAndPassword(auth ,name, email, password)

   } 

   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
    
    const authInfo = {registerUser,user};
    
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
