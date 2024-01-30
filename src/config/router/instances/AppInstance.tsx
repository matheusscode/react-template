import { UIContainer } from "ui/containers";
import Home from "ui/pages/Home";
import PrivateRoute from "ui/pages/PrivateRoute";
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
