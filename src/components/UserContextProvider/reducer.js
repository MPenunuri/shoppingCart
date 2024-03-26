const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VISITOR":
      return { ...state, visitor: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
