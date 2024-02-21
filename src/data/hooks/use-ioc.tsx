import { IoCContext } from "data/context/ioc/ioc-context";
import { IoCProps } from "data/context/ioc/models/ioc-props";
import { useContext } from "react";

export const useIoC = (): IoCProps => {
  const context = useContext(IoCContext);
  if (!Object.keys(context).length) {
    throw new Error("useIoC deve ser utilizado dentro de um IoCProvider");
  }
  return context;
};
