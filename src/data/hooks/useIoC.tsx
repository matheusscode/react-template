import { IoCContext } from "data/context/IoC/IoCContext";
import { IoCProps } from "data/context/IoC/models/IoCProps";
import { useContext } from "react";

export const useIoC = (): IoCProps => {
  const context = useContext(IoCContext);
  if (!Object.keys(context).length) {
    throw new Error("useIoC deve ser utilizado dentro de um IoCProvider");
  }
  return context;
};
