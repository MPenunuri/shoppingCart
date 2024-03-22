import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { ProductsContext } from "../components/ProductsContextProvider.jsx";
import Products from "../components/Products.jsx";

export default function AllProducts() {
  const { dispatch } = useContext(ProductsContext);

  const { isPending, error, data } = useQuery({
    queryKey: ["allProductsData"],
    queryFn: () =>
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => res.data)
        .then(dispatch({ type: "GET_ALL_PRODUCTS", payload: data })),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return <Products products={data} />;
}
