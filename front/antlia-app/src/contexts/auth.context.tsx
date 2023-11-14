import React, {
  useState,
  useEffect,
  createContext,
  ReactNode,
  Context,
} from "react";
import { AuthService, User } from "../service/auth";
import { useCart } from "./CartContext";

export type AuthContextProps = {
  user: User | null;
  isLoggedIn: boolean;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
  signIn: (payload: LoginForm) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode;
}

export type LoginForm = {
  username: string;
  password: string;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { cartDispatch } = useCart();

  async function checkTheLoggedUser() {
    const userLogged = await AuthService.getLoggedUser();
    const hasUserLoggedIn = !!userLogged && !!userLogged?.access_token;

    if (hasUserLoggedIn) {
      setUser(userLogged.user);
      setLoggedIn(true);
    }
  }

  useEffect(() => {
    checkTheLoggedUser();
  }, []);

  const signIn = async (payload: LoginForm) => {
    return AuthService.login(payload.username, payload.password).then(
      (data) => {
        setUser(data);
        setLoggedIn(true);
      }
    );
  };

  const logout = () => {
    console.log("deslogado");
    cartDispatch({ type: "CLEAR_CART" });
    AuthService.logout();
    setLoggedIn(false);
  };

  const useContext = {
    user,
    isLoggedIn,
    isError,
    setIsError,
    signIn,
    logout,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext) as AuthContextProps;

export default AuthContext;
