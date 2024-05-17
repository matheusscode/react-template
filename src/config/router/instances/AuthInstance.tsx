import { UIContainer } from "ui/containers";
import { RouteObject } from "react-router-dom";

export const authInstance: RouteObject = {
  element: <UIContainer.Auth />,
  errorElement: <div>Error Auth</div>,
  children: [
    {
      path: "/sign-in",
      element: null,
    },
    {
      path: "/sign-up",
      element: null,
    },
  ],
};
