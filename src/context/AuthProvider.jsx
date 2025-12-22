import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import auth from "../FireBase/FireBase.config";
export const AuthContext = createContext(null);//context 
function AuthProvider({ children }) {
  // create user
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((result) =>
      console.log(result.user)
    );
  };
  //user Login
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>console.log(result.user))
    
  };

  const authInfo = {
    registerUser,
    userLogin

  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
