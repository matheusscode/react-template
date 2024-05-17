import { UIContainer } from "ui/containers";
import { RouteObject } from "react-router-dom";

export const dashboardInstance: RouteObject = {
  element: <UIContainer.App />,
  errorElement: <div>Error App</div>,
  children: null,
};
