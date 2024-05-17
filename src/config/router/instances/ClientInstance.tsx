import { Container } from "ui/containers";
import { RouteObject } from "react-router-dom";
import { ClientPlatform } from "ui/pages/client";

export const clientInstance: RouteObject = {
  element: <Container.Platform />,
  errorElement: <div>Error App</div>,
  children: [
    {
      path: "/",
      element: <ClientPlatform.PlatformHome />,
    },
  ],
};
