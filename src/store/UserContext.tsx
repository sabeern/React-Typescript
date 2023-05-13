import React, { createContext, useState } from "react";

type userType = {
  userName: string;
  userEmail: string;
};
type valueType = {
  user: userType;
  setUser: React.Dispatch<React.SetStateAction<userType>>;
};
type childrenProp = {
  children: React.ReactNode;
};
export const UserContext = createContext<valueType>({} as valueType);
export const UserContextProvider = ({ children }: childrenProp) => {
  const [user, setUser] = useState<userType>({} as userType);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
