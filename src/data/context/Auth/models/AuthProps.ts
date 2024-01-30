export interface AuthenticationContextData {
   token: string;
   refreshToken: string;
   subject: string;
   email: string;
   roles: Set<string>;
   logout: () => Promise<void>;
 }

 export enum AuthCogCookieKeys {
   refreshToken = "refreshToken",
 }

 export interface AuthenticationResponseMeta {
   id: string;
   email: string;
   name: string;
   roles: string[];
 }

 export interface AuthenticationResponse {
   AccessToken: string;
   ExpiresIn: number;
   TokenType: "Bearer";
   RefreshToken: string;
   meta: AuthenticationResponseMeta;
 }

 export interface CognitoParsedToken {
   sub: string;
   "cognito:groups": string[];
   iss: string;
   client_id: string;
   origin_jti: string;
   event_id: string;
   token_use: string;
   scope: string;
   auth_time: number;
   exp: number;
   iat: number;
   jti: string;
   username: string;
 }
 