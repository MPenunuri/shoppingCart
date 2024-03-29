import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home.jsx";
import Layout from "./routes/Layout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import AllProducts from "./routes/AllProducts.jsx";
import ProductDetails from "./routes/ProductDetails.jsx";
import CategoryProducts from "./routes/CategoryProducts.jsx";
import FilteredProducts from "./routes/FilteredProducts.jsx";
import User from "./routes/User.jsx";
import Cart from "./routes/Cart.jsx";
import SetUserCart from "./routes/SetUserCart.jsx";
import AddProductToCart from "./routes/AddProductToCart.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart/setup", element: <SetUserCart /> },
      ],
    },
    {
      path: "/products",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <AllProducts /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "category/:name", element: <CategoryProducts /> },
        {
          path: "category/:current/filter/:input",
          element: <FilteredProducts />,
        },
      ],
    },
    {
      path: "/user",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <User /> },
        { path: "cart", element: <Cart /> },
        { path: "cart/add/:productid", element: <AddProductToCart /> },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}
