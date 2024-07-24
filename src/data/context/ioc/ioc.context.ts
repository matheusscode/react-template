import { createContext } from "react";
import { IoCProps } from "./models/ioc.context.props";

export const IoCContext = createContext<IoCProps>({} as IoCProps);
