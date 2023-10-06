/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // User Registration Start
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Registration End

  //   User Login Start
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   User Login End

  //   Update User Start

  const updateUser = (name, photo) => {
    return(updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: photo
    }))
  }



  //   Update User End

  //   User Logout Start
  const logout = () => {
    return signOut(auth);
  };
  //   User Logout End

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
    });
    return () => {
      unsubscribe;
    };
  }, []);

  const AuthInfo = { user, createUser, signIn, updateUser, logout };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;