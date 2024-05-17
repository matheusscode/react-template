import { createBrowserRouter } from "react-router-dom";
import { clientInstance } from "./instances/ClientInstance";
import { authInstance } from "./instances/AuthInstance";
import { adminInstance } from "./instances/AdminInstance";
import { dashboardInstance } from "./instances/DashboardInstance";

export const router = createBrowserRouter([
  clientInstance,
  authInstance,
  adminInstance,
  dashboardInstance,
]);
