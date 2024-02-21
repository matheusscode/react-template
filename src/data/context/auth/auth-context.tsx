import { createContext } from "react";

import { AuthenticationContextData } from "./models/AuthProps";

export const AuthContext = createContext<AuthenticationContextData | null>(
  null
);
