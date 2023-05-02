import React, { createContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;