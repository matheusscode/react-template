import { ReactNode } from "react";
import IoCProvider from "./ioc/ioc.provider";
import AuthProvider from "./auth/auth.provider";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <IoCProvider>
      <AuthProvider>{children}</AuthProvider>
    </IoCProvider>
  );
}
