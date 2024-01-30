import { useContext } from "react";
import { AuthContext } from "data/context/Auth/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth não pode ser utilizado fora de um AuthProvider");
  }
  return context;
};
