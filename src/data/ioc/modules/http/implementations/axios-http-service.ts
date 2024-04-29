import Axios, { AxiosError, AxiosInstance } from "axios";
import { injectable } from "inversify";
import { HttpServiceProps } from "../models/http-service-props";
import AppError from "@utils/app-error";
import appConfig from "@config/app-config";
@injectable()
export default class AxiosHttpService implements HttpServiceProps {
  private httpInstance: AxiosInstance;

  constructor() {
    this.httpInstance = Axios.create({
      timeout: appConfig.api.timeout,
      baseURL: appConfig.api.url,
    });
  }

  setTokenExpirationStrategy(
    tokenExpireStrategy: () => Promise<string | null>
  ) {
    this.httpInstance.interceptors.request.clear();
    this.httpInstance.interceptors.request.use(async (config) => {
      const newTokenProvided = await tokenExpireStrategy();
      if (newTokenProvided) {
        this.setAuthorization(newTokenProvided);
        config.headers.Authorization = newTokenProvided;
      }
      return config;
    });
  }

  setAuthorization(token: string): void {
    this.httpInstance.defaults.headers.common.Authorization = token;
  }

  getAuthorization(): string {
    return this.httpInstance.defaults.headers.common.Authorization!.toString();
  }

  private async makeRequest<T = any>(
    method: string,
    path: string,
    body?: any,
    params?: {}
  ): Promise<T> {
    try {
      const { data } = await this.httpInstance.request<T>({
        method,
        url: path,
        data: body,
        params,
      });
      return data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      if (axiosError.response && axiosError.response.status === 403) {
        throw new AppError("Erro 403 - Não autorizado", "error");
      }
      if (
        axiosError.response &&
        axiosError.response.data &&
        axiosError.response.data.message
      ) {
        throw new AppError(axiosError.response.data.message, "error");
      }
      throw new AppError(
        `Não foi possível realizar a operação: ${axiosError.message}`,
        "error"
      );
    }
  }

  public async get<T>(path: string, params?: any): Promise<T> {
    return await this.httpInstance
      .get<T>(path, params)
      .then(({ data }) => data)
      .catch((err) => {
        const error: AxiosError<{ message: string }> = err;
        if (error.response && error.response.status === 403) {
          throw new AppError("erro 403", "error");
        }
        if (error.response && error.response.data.message) {
          throw new AppError(error.response.data.message, "error");
        } else {
          throw new AppError("Unable to perform operation", "error");
        }
      })
      .catch((err) => {
        throw err;
      });
  }

  async post<T = any>(path: string, body: any, params?: {}): Promise<T> {
    return await this.makeRequest<T>("POST", path, body, params);
  }

  async delete<T = any>(path: string, params?: {}): Promise<T> {
    return await this.makeRequest<T>("DELETE", path, undefined, params);
  }

  async patch<T = any>(path: string, body?: string, params?: {}): Promise<T> {
    return await this.makeRequest<T>("PATCH", path, body, params);
  }

  async put<T = any>(path: string, body?: string, params?: {}): Promise<T> {
    return await this.makeRequest<T>("PUT", path, body, params);
  }
}
