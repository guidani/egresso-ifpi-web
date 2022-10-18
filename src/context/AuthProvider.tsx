import { createContext, ReactNode, useState } from "react";

interface IUserDataContext {
  uid: string;
  email: string;
}

export const UserContext = createContext<IUserDataContext | null>(null);

export const AuthProvider = (children: ReactNode) => {
  const [user, setUser] = useState({} as IUserDataContext);

  setUser('Guilherme')

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
