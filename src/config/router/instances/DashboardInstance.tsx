import { Container } from "ui/containers";
import { RouteObject } from "react-router-dom";
import { ClientDashboard } from "ui/pages/client";

export const dashboardInstance: RouteObject = {
  element: <Container.Dashboard />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/dashboard",
      element: <ClientDashboard.DashboardHome />,
    },
  ],
};
