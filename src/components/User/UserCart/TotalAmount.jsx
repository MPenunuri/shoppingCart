import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import getProducts from "./getProducts.js";

export default function TotalAmount({ styles, cart }) {
  TotalAmount.propTypes = {
    styles: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
  };

  /*Considering that the cart API only includes the product ID and quantity, 
    but not the price, it is necessary to request the
    corresponding information from the products API (ckeck getProducts). */

  const { products } = cart; // Data from carts API
  const [items, setItems] = useState(); // Storage for products API data

  useEffect(() => {
    (async function getItemsData() {
      const cartProducts = await getProducts(products);
      setItems(cartProducts);
    })();
  }, [products]);

  const amount = useMemo(() => {
    if (items && items.length > 0) {
      const fullItemsFinancialData = products.map((p) => {
        const complementaryData = items.find((i) => {
          return i.id === p.productId;
        });
        return { uprice: complementaryData.price, quantity: p.quantity };
      });
      return fullItemsFinancialData.reduce(
        (total, product) => total + product.uprice * product.quantity,
        0
      );
    }
  }, [items, products]);

  return (
    <h3 className={styles.totalAmount}>{`Your total amount is: ${amount}`}</h3>
  );
}
