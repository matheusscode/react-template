import { createContext } from "react";
import { IoCProps } from "./models/ioc-props";

export const IoCContext = createContext<IoCProps>({} as IoCProps);
