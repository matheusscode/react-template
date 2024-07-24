import { useContext } from "react";
import { IoCContext } from "@/context/ioc/ioc.context";
import { IoCProps } from "@/context/ioc/models/ioc.context.props";

export const useIoC = (): IoCProps => {
  const context = useContext(IoCContext);
  if (!Object.keys(context).length) {
    throw new Error("useIoC deve ser utilizado dentro de um IoCProvider");
  }
  return context;
};
