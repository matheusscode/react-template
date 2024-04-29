import { createContext } from "react";
import { AuthenticationProps } from "./models/auth-props";

export const AuthContext = createContext<AuthenticationProps>(
  {} as AuthenticationProps
);
