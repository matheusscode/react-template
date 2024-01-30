import { createBrowserRouter } from "react-router-dom";
import { appInstance, authInstance } from "./instances";

export const router = createBrowserRouter([appInstance, authInstance]);
