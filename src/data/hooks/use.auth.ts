import { useContext } from "react";
import { AuthContext } from "@/context/auth/auth.context";
import { AuthContextProps } from "@/context/auth/models/auth.context.props";

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
  }
  return context;
};
