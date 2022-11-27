import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../../database/firebase/config";

interface LoginProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<any>({});

export const AuthProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState({});

  function logInWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function registerWithEmailAndPassword(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser!);
    });

    return () => {
      unsubscriber();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logInWithEmailAndPassword,
        registerWithEmailAndPassword,
        logOut,
        resetPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
