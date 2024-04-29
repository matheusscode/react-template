import React from "react";
import { PathRouteProps } from "react-router-dom";

interface PrivateRouteProps extends PathRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  return null;
};

export default PrivateRoute;
