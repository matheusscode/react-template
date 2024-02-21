import { UIContainer } from "ui/containers";
import Home from "ui/pages/home";
import PrivateRoute from "ui/pages/private-route";
import { RouteObject } from "react-router-dom";

export const appInstance: RouteObject = {
  element: <UIContainer.App />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute />,
    },
  ],
};
