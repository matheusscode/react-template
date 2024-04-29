import { RouteObject } from "react-router-dom";
import { UiContainer } from "@containers/index";
import { Page } from "@pages/journal/index";

export const appInstance: RouteObject = {
  element: <UiContainer.App />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/",
      element: <Page.Home />,
    },
  ],
};
