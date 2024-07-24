import { AUTH_PAGES } from "@/pages/auth";
import { RouteObject } from "react-router-dom";
import { LAYOUT_CONTAINER } from "@/container/index";

export const authInstance: RouteObject = {
  element: <LAYOUT_CONTAINER.Auth />,
  errorElement: <div>Error Auth</div>,
  children: [
    {
      path: "/sign-in",
      element: <AUTH_PAGES.SignIn />,
    },
  ],
};
