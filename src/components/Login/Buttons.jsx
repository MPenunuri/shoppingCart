import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Buttons({ visitor, dispatch }) {
  Buttons.propTypes = {
    visitor: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  const navigate = useNavigate();
  return (
    <>
      {visitor === false ? (
        <button
          type="button"
          onClick={() => {
            dispatch({ type: "SET_VISITOR", payload: true });
            navigate("/products");
          }}
        >
          Enter as visitor
        </button>
      ) : (
        <></>
      )}
      {visitor === true ? (
        <button
          type="button"
          onClick={() => {
            navigate("/products");
          }}
        >
          Cancel
        </button>
      ) : (
        <></>
      )}
      <button type="submit">Login</button>
    </>
  );
}
