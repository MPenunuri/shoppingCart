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

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <Home /> }],
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
      path: "/",
      element: <Navigate to="/home" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}
