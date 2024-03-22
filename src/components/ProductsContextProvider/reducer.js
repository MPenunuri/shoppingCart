const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return { ...state, allProducts: action.payload };
    case "CHANGE_CATEGORY":
      return { ...state, currentCategory: action.payload };
    case "SET_FILTERED_PRODUCTS":
      return {
        ...state,
        filteredProducts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
