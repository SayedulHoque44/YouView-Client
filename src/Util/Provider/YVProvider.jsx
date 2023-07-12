import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.confiq";

// Create Context
export const YVContext = createContext(null);

// ---Component---
const YVProvider = ({ children }) => {
  //created Varriables
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const [user, setUser] = useState(null);

  //use varriables
  const auth = getAuth(app);

  //Context Provide Values
  const contextValue = { isAsideOpen, setIsAsideOpen, user, auth };

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
