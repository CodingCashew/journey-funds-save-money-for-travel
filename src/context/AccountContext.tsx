import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { User } from "../shared/interfaces";

type AccountProviderProps = {
  children: ReactNode;
};

type AccountContextType = {
  isLoggedIn: boolean;
  user: User;
  setIsLoggedIn: (newLoggedInState: boolean) => void;
  updateIsLoggedIn: (newLoggedInState: boolean) => void;
  updateUser: (newUser: User) => void;
};

const AccountContext = createContext({} as AccountContextType);

export function useAccountContext() {
  return useContext(AccountContext);
}

export const initialValues: User = {
  email: "",
  password: "",
  expenses: [],
};

export function AccountProvider({ children }: AccountProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>(initialValues);

  function updateIsLoggedIn(newLoggedInState: boolean): void {
    setIsLoggedIn(newLoggedInState);
  }

  function updateUser(newUserValues: User): void {
    setUser(newUserValues);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    if (data !== "undefined" && data !== null) {
      const parsedUser = JSON.parse(data!);
      if (parsedUser.email.length) {
        setUser(parsedUser);
        setIsLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        user,
        updateIsLoggedIn,
        updateUser,
        setIsLoggedIn,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
