import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Products from "../components/Products.jsx";
import Loading from "../components/Loading.jsx";
import { ProductsContext } from "../components/ProductsContextProvider.jsx";

export default function CategoryProducts() {
  const { name } = useParams();
  const { isPending, error, data } = useQuery({
    queryKey: [`category_${name}_data`],
    queryFn: () =>
      axios
        .get(`https://fakestoreapi.com/products/category/${name}`)
        .then((res) => res.data),
  });

  const { dispatch } = useContext(ProductsContext);

  useEffect(() => {
    dispatch({ type: "SET_ALL_PRODUCTS", payload: data });
  }, [data, dispatch]);

  if (isPending) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return <Products products={data} />;
}
