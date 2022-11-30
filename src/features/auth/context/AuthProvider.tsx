import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../../../database/firebase/config";

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
    return createUserWithEmailAndPassword(auth, email, password)
      .then((credential) => {
        const userID = credential.user.uid;
        const userEmail = credential.user.email;
        setDoc(doc(db, "users", `${userID}`), {
          email: `${userEmail}`,
        });
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
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
