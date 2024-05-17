import { AuthContext } from "data/context/auth/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
  }
  return context;
};
