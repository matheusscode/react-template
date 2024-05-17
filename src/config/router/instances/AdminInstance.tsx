import { Container } from "ui/containers";
import { RouteObject } from "react-router-dom";

export const adminInstance: RouteObject = {
  element: <Container.Admin />,
  errorElement: <div>Error App</div>,
  children: null,
};
