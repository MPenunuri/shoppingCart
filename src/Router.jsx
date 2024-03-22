import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import AllProducts from "./routes/AllProducts.jsx";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [{ index: true, element: <AllProducts /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
