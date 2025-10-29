import { createBrowserRouter } from "react-router-dom";
import Cart from "../page/Cart";
import ErrorPage from "../page/ErrorPage";
import Product from "../page/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
