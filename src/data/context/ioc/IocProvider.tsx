import { appIocContainer } from "data/ioc";
import { IoCContext } from "./IoCContext";
import { ReactNode } from "react";

export default function IoCProvider({ children }: { children: ReactNode }) {
  return (
    <IoCContext.Provider value={{ serviceContainer: appIocContainer }}>
      {children}
    </IoCContext.Provider>
  );
}
