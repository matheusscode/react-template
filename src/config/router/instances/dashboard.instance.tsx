import { RouteObject } from "react-router-dom";
import { PLATFORM_PAGES } from "@/pages/platform";
import { LAYOUT_CONTAINER } from "@/container/index";

export const dashboardInstance: RouteObject = {
  element: <LAYOUT_CONTAINER.Dashboard />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/dashboard",
      element: <PLATFORM_PAGES.Home />,
    },
  ],
};
