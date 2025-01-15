import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import About from "../About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
