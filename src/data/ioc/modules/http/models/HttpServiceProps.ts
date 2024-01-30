export interface HttpServiceProps {
  setAuthorization(token: string): void;
  setTokenExpirationStrategy: (
    tokenExpireStrategy: () => Promise<string | null>
  ) => void;
  getAuthorization(): string;
  get<T = any>(path: string, params?: {}): Promise<T>;
  post<T = any>(path: string, body: any, params?: {}): Promise<T>;
  patch<T = any>(path: string, body?: any, params?: {}): Promise<T>;
  put<T = any>(path: string, body?: any, params?: {}): Promise<T>;
  delete<T = any>(path: string, params?: {}): Promise<T>;
}
