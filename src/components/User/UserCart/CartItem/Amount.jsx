import PropTypes from "prop-types";

export default function Amount({ styles, data, quantity }) {
  Amount.propTypes = {
    styles: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
  };

  return (
    <div
      className={`${styles.itemProp} ${styles.amountContainer}`}
      aria-hidden="true"
    >
      <p id="amountLabel">Amount:</p>
      <p id="amount" aria-labelledby="amount">
        {parseFloat(data.price) * parseFloat(quantity)}
      </p>
    </div>
  );
}
