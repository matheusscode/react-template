import { lazy } from "react";

const Home = lazy(() => import("../home"));
const TestForm = lazy(() => import("../_enviroments/test-form"));

export const Page = {
  Home,
  TestForm,
};
