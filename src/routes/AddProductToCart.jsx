import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "../components/UserContextProvider.jsx";
import Loading from "../components/Loading.jsx";

export default function AddProductToCart() {
  const { productid } = useParams();
  const id = parseInt(productid);
  const { state, dispatch } = useContext(UserContext);
  const { cart } = state;
  const { products } = cart;
  const [added, setAdded] = useState();

  const hasExecutedEffect = useRef(false);

  useEffect(() => {
    if (!hasExecutedEffect.current) {
      hasExecutedEffect.current = true;

      const inCart = products.find((i) => {
        return i.productId === id;
      });
      if (inCart !== undefined) {
        const arr = products.map((i) => {
          if (i.productId === id) {
            return { productId: id, quantity: i.quantity + 1 };
          } else return i;
        });
        dispatch({
          type: "SET_CART",
          payload: { ...cart, products: arr },
        });
        setAdded(true);
      } else if (inCart === undefined) {
        dispatch({
          type: "SET_CART",
          payload: {
            ...cart,
            products: [...products, { productId: id, quantity: 1 }],
          },
        });
        setAdded(true);
      }
    }
  }, [cart, dispatch, id, products]);

  return (
    <>{added ? <Navigate to="/user/cart" replace={true} /> : <Loading />}</>
  );
}
