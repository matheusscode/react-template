import { Container } from "inversify";
import AxiosHttpService from "./modules/http/implementations/AxiosHttpService";
import { HttpServiceProps } from "./modules/http/models/HttpServiceProps";
import { IoCProps } from "./models/IoCProps";

const appIocContainer = new Container({ defaultScope: "Singleton" });

function registerNewService<T>(
  type: string | symbol,
  constructor: new (...args: never[]) => T
) {
  appIocContainer.bind<T>(type).to(constructor);
}

registerNewService<HttpServiceProps>(IoCProps.HttpService, AxiosHttpService);

export { appIocContainer };
