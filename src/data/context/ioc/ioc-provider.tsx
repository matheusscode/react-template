import { appIocContainer } from "data/ioc";
import { IoCContext } from "./ioc-context";
import { ReactNode } from "react";

export default function IoCProvider({ children }: { children: ReactNode }) {
  return (
    <IoCContext.Provider value={{ serviceContainer: appIocContainer }}>
      {children}
    </IoCContext.Provider>
  );
}
