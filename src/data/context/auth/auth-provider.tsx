import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { HttpServiceProps } from "data/ioc/modules/http/models/http-service-props";
import { useIoC } from "data/hooks/use-ioc";
import appConfig from "@config/app-config";
import { IoCProps } from "data/ioc/models/ioc-props";
import {
  AuthCogCookieKeys,
  AuthenticationContextData,
  AuthenticationResponse,
  CognitoParsedToken,
} from "./models/AuthProps";

const BUFFER_TIME_MS = 59 * 60 * 1e3;
const TOKEN_REFRESH_BEFORE_EXPIRATION_TIME_MS = 30e3;

const AuthContext = createContext<AuthenticationContextData | null>(null);

const authServiceStandalone = axios.create({
  baseURL: appConfig.auth.url,
  timeout: appConfig.auth.timeout,
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [currentAuthState, setCurrentAuthState] =
    useState<AuthenticationContextData | null>(null);

  const iocContext = useIoC();
  const httpService = iocContext.serviceContainer.get<HttpServiceProps>(
    IoCProps.HttpService
  );

  const refreshTokenRequest = async (
    currentTokenRefresh: string
  ): Promise<AuthenticationResponse> => {
    const { data: refreshTokenResponse } =
      await authServiceStandalone.post<AuthenticationResponse>(
        "/auth/refresh",
        {
          token: currentTokenRefresh,
        }
      );

    return refreshTokenResponse;
  };

  const setTokenExpiration = useCallback(
    async (nextTokenRefreshTime: number): Promise<string | null> => {
      try {
        const data = await tokenRefresh(
          nextTokenRefreshTime - TOKEN_REFRESH_BEFORE_EXPIRATION_TIME_MS
        );
        if (data) {
          const builtToken = `${data.TokenType} ${data.AccessToken}`;
          httpService.setAuthorization(builtToken);
          return builtToken;
        }
        return null;
      } catch (error) {
        console.error(
          "[setTokenExpiration]: Failed to refresh access token in setTokenExpirationStrategy",
          error
        );
        return null;
      }
    },
    []
  );

  const tokenRefresh = useCallback(
    async (refreshTokenExpirationTime?: number) => {
      try {
        const cookies = new Cookies();
        const cookiesTokenRefresh = cookies.get(AuthCogCookieKeys.refreshToken);

        if (!cookiesTokenRefresh) {
          throw new Error("Refresh token not found");
        }

        if (
          refreshTokenExpirationTime &&
          +new Date() <= refreshTokenExpirationTime
        ) {
          return null;
        }

        const refreshTokenResponse = await refreshTokenRequest(
          cookiesTokenRefresh
        );
        const nextTokenRefreshTime =
          jwtDecode<CognitoParsedToken>(refreshTokenResponse.AccessToken).exp *
            1e3 -
          BUFFER_TIME_MS;
        httpService.setTokenExpirationStrategy(
          async () => await setTokenExpiration(nextTokenRefreshTime)
        );

        console.info("======== Sucesso tokenRefresh ========");
        return refreshTokenResponse;
      } catch (error) {
        console.error("[tokenRefresh]: Failed to refresh access token", error);
        return null;
      }
    },
    []
  );

  const bootstrapAuthentication = useCallback(async () => {
    try {
      const data = await tokenRefresh();

      if (!data) {
        await logout();
        return;
      }

      httpService.setAuthorization(`${data.TokenType} ${data.AccessToken}`);

      const authData: AuthenticationContextData = {
        email: data.meta.email,
        roles: new Set(data.meta.roles),
        refreshToken: data.RefreshToken,
        subject: data.meta.id,
        token: data.AccessToken,
        logout,
      };

      setCurrentAuthState(authData);
    } catch (error) {
      console.error(
        "[bootstrapAuthentication]: Failed to refresh access token",
        error
      );
      await logout();
    }
  }, []);

  useEffect(() => {
    bootstrapAuthentication();
  }, []);

  const logout = useCallback(async () => {}, []);

  return (
    <AuthContext.Provider value={currentAuthState}>
      {children}
    </AuthContext.Provider>
  );
}
