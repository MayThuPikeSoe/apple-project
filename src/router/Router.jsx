import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "my-cart",
        // element: <Mycart />,
      },
      {
        path: "product-detail/:productId",
        // element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
