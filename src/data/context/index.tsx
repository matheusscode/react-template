import { ReactNode } from "react";
import IoCProvider from "./ioc/IocProvider";
import AuthProvider from "./auth/AuthProvider";

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <IoCProvider>
      <AuthProvider>{children}</AuthProvider>
    </IoCProvider>
  );
}
