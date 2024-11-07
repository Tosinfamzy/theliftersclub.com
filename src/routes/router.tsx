import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

export default router;
