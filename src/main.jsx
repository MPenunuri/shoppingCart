import React from "react";
import ReactDOM from "react-dom/client";
import UserContextProvider from "./components/UserContextProvider.jsx";
import ProductsContextProvider from "./components/ProductsContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router.jsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <ProductsContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </ProductsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
