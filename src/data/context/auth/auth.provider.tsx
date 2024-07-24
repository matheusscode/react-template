import { ReactNode } from "react";
import { AuthContext } from "./auth.context";

export default function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
