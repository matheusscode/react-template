import { appIocContainer } from "ioc";
import { IoCContext } from "./ioc.context";
import { ReactNode } from "react";

export default function IoCProvider({ children }: { children: ReactNode }) {
  return (
    <IoCContext.Provider value={{ service: appIocContainer }}>
      {children}
    </IoCContext.Provider>
  );
}
