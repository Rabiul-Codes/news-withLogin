import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../FireBase/FireBase.config";
import { loginToaster, registerToaster } from "../Toaster/Toaster";
export const AuthContext = createContext(null);//context 
function AuthProvider({ children }) {
  const [user,setUser]= useState(null)
  // create user
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
   .then((result)=>{
    // setUser(result.user);
    registerToaster('Register success')
   })
    .catch(error=>{
      registerToaster(error.message)
    })
   
  };
  //user Login
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      // console.log(result.user)
     loginToaster('Login success')
    })
    .catch((error)=>{
      // console.log(error.code)
      loginToaster('Wrong Email or password')
      
      return
    }) 
  };

  //google login

  const googleProvider = new GoogleAuthProvider();
  const googleLogin =()=>{
   return signInWithPopup(auth,googleProvider)
   .then((result)=>{
    // setUser(result.user)
   })
   .catch((error)=>{
    loginToaster(error.message)
   })
  }

   // observer

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  if (currentUser) {
    setUser(currentUser)
    console.log('sing in whoo')
  } else {
    setUser(null)
    console.log('logout form auth')
  }
});
return()=>{
  unSubscribe()
}
  },[])
  //LogOut
  const logOut=()=>{
    return signOut(auth);
  }
  const authInfo = {
    registerUser,
    userLogin,
    setUser,
    user,
    googleLogin,
    logOut,

  };
  

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
