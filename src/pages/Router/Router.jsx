import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import About from "../About/About";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
