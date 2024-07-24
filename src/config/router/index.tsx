import { LAYOUT_CONTAINER } from "@/container/index";
import { createBrowserRouter } from "react-router-dom";
import { authInstance } from "./instances/auth.instance";
import { dashboardInstance } from "./instances/dashboard.instance";

export const router = createBrowserRouter([
  {
    element: <LAYOUT_CONTAINER.App />,
    children: [authInstance, dashboardInstance],
  },
]);
