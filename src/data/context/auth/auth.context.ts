import { createContext } from "react";
import { AuthContextProps } from "./models/auth.context.props";

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
