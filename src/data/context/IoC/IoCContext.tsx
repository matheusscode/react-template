import { createContext } from "react";

import { IoCProps } from "./models/IoCProps";

export const IoCContext = createContext<IoCProps>({} as IoCProps);
