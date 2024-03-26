import { useReducer, createContext } from "react";
import reducer from "./ProductsContextProvider/reducer.js";
import PropTypes from "prop-types";

export const ProductsContext = createContext();

function ProductsContextProvider({ children }) {
  ProductsContextProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  const initialState = {
    allProducts: [],
    currentCategory: "all",
    filteredProducts: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContextProvider;
