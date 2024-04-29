import { UiContainer } from "@containers/index";
import { RouteObject } from "react-router-dom";

export const authInstance: RouteObject = {
  element: <UiContainer.Auth />,
  errorElement: <div>Error Auth</div>,
  children: [],
};
