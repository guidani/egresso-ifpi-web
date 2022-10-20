import React, { createContext, useEffect, useState } from "react";

interface IUserDataContext {
  uid: string;
  email: string;
}

interface LoginProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserDataContext>(
  {} as IUserDataContext
);

export const AuthProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState({} as IUserDataContext);

  useEffect(() => {
    setUser({ email: "guilherme@gmail.com", uid: "ashdoaisudhoasud" });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
