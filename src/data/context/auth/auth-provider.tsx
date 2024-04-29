import { ReactNode } from "react";
import { AuthContext } from "./auth-context";
import { AuthenticationProps } from "./models/auth-props";

export default function AuthProvider({ children }: { children: ReactNode }) {
  // const iocContext = useIoC();
  // const httpService = iocContext.serviceContainer.get<HttpServiceProps>(
  //   IoCProps.HttpService
  // );

  const CONTEXT_PROVIDER_VALUES: AuthenticationProps = {};

  return (
    <AuthContext.Provider value={CONTEXT_PROVIDER_VALUES}>
      {children}
    </AuthContext.Provider>
  );
}
