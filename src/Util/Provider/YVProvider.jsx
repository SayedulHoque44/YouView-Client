import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.confiq";

// Create Context
export const YVContext = createContext(null);

// ---Component---
const YVProvider = ({ children }) => {
  //created Varriables
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //use varriables
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  //authenticaiton function
  const signIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Context Provide Values
  const contextValue = { isAsideOpen, setIsAsideOpen, user, auth, signIn };

  //component lifeCycle
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    //cleanup
    return () => unSubscribe();
  }, []);

  // ---Component Return---
  return (
    <YVContext.Provider value={contextValue}>{children}</YVContext.Provider>
  );
};

export default YVProvider;
