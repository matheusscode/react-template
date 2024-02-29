import { Container } from "inversify";
import AxiosHttpService from "./modules/http/implementations/axios-http-service";
import { HttpServiceProps } from "./modules/http/models/http-service-props";
import { IoCProps } from "./models/ioc-props";

const appIocContainer = new Container({ defaultScope: "Singleton" });

function registerNewService<T>(
  type: string | symbol,
  constructor: new (...args: never[]) => T
) {
  appIocContainer.bind<T>(type).to(constructor);
}

registerNewService<HttpServiceProps>(IoCProps.HttpService, AxiosHttpService);

export { appIocContainer };
