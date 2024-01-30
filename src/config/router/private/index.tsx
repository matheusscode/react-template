import React from "react";
import { PathRouteProps } from "react-router-dom";
import { useAuth } from "data/hooks/useAuth";

interface PrivateRouteProps extends PathRouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  const authContext = useAuth();

  if (authContext) {
    if (authContext.token && Component) {
      return <Component />;
    }

    authContext.logout();
  }
};

export default PrivateRoute;
