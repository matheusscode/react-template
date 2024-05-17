import { ReactNode } from "react";
import axios from "axios";
import appConfig from "@config/app-config";

import { AuthContext } from "./AuthContext";

const authServiceStandalone = axios.create({
  baseURL: appConfig.auth.url,
  timeout: appConfig.auth.timeout,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
}
