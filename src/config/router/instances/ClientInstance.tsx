import { UIContainer } from "ui/containers";
import { RouteObject } from "react-router-dom";
import { ClientDashboard, ClientPlatform } from "ui/pages/client";

export const clientInstance: RouteObject = {
  element: <UIContainer.App />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/",
      element: <ClientPlatform.PlatformHome />,
    },
    {
      path: "/dashboard",
      element: <ClientDashboard.DashboardHome />,
    },
  ],
};
