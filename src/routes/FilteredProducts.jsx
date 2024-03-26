import { useContext } from "react";
import { ProductsContext } from "../components/ProductsContextProvider.jsx";
import Products from "../components/Products.jsx";

export default function FilteredProduct() {
  const { state } = useContext(ProductsContext);
  const { filteredProducts } = state;
  return <Products products={filteredProducts} />;
}
