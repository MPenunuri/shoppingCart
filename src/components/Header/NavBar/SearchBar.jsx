import { useContext } from "react";
import { ProductsContext } from "../../ProductsContextProvider.jsx";
import SearchForm from "./SearchBar/SearchForm.jsx";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { state, dispatch } = useContext(ProductsContext);
  const { allProducts, currentCategory } = state;
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const inputVal = e.target.value.toLowerCase();
    const regex = new RegExp(inputVal, "i");
    const arr = allProducts.filter((product) => {
      return regex.test(product.title.toLowerCase());
    });
    dispatch({ type: "SET_FILTERED_PRODUCTS", payload: arr });
    inputVal.length > 0
      ? navigate(`/products/category/${currentCategory}/filter/${inputVal}`)
      : currentCategory === "all"
      ? navigate("/products")
      : navigate(`/products/category/${currentCategory}`);
  };

  return <SearchForm inputHandler={inputHandler} />;
}

export default SearchBar;
