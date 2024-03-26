import { useReducer, createContext } from "react";
import reducer from "./UserContextProvider/reducer.js";
import PropTypes from "prop-types";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  UserContextProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  };

  const initialState = {
    visitor: false,
    user: null,
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
