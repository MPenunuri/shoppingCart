import { useContext } from "react";
import { ProductsContext } from "../../ProductsContextProvider.jsx";
import SearchForm from "./SearchBar/SearchForm.jsx";

function SearchBar() {
  const { state, dispatch } = useContext(ProductsContext);
  const { allProducts } = state;

  const inputHandler = (e) => {
    const inputVal = e.target.value.toLowerCase();
    const regex = new RegExp(inputVal, "i");
    const arr = allProducts.filter((product) => {
      return regex.test(product.title.toLowerCase());
    });
    dispatch({ type: "SET_FILTERED_PRODUCTS", payload: arr });
  };

  return <SearchForm inputHandler={inputHandler} />;
}

export default SearchBar;
