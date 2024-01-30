import { ReactNode } from "react";
import IoCProvider from "./IoC/IoCProvider";
import AuthProvider from "./Auth/AuthProvider";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <IoCProvider>
      <AuthProvider>{children}</AuthProvider>
    </IoCProvider>
  );
}
