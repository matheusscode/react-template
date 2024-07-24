import { Container } from "inversify";
import AxiosHttpService from "../modules/axios/service/axios.service.instance";
import { HttpServiceProps } from "../modules/axios/models/axios.service.props";
import { IoCServiceProps } from "./ioc.instance";

const appIocContainer = new Container({ defaultScope: "Singleton" });

function registerNewService<T>(
  type: string | symbol,
  constructor: new (...args: never[]) => T
) {
  appIocContainer.bind<T>(type).to(constructor);
}

registerNewService<HttpServiceProps>(
  IoCServiceProps.HttpService,
  AxiosHttpService
);

export { appIocContainer };
