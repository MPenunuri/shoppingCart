import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./routes/Layout.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import AllProducts from "./routes/AllProducts.jsx";
import ProductDetails from "./components/Products/ProductDetails.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/products",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <AllProducts /> },
        { path: "product/:id", element: <ProductDetails /> },
      ],
    },
    {
      path: "/",
      element: <Navigate to="/products" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
}
