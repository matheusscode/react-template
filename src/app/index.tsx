import { router } from "@config/router";
import ContextProvider from "data/context";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
