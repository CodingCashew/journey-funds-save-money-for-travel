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
  updateIsLoggedIn: (newLoggedInState: boolean) => void;
  updateUser: (newUser: User) => void;
};

const AccountContext = createContext({} as AccountContextType);

export function useAccountContext() {
  return useContext(AccountContext);
}

const initialValues: User = {
  email: "",
  password: "",
  expenses: [],
};

export function AccountProvider({ children }: AccountProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>(initialValues);

  function updateIsLoggedIn(newLoggedInState: boolean): void {
    setIsLoggedIn(newLoggedInState);

    if (!isLoggedIn) updateUser(initialValues);
  }

  function updateUser(newUserValues: User): void {
    setUser(newUserValues);
  }

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    if (data !== "undefined") {
      setUser(JSON.parse(data!));
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
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
