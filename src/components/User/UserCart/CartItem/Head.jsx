import PropTypes from "prop-types";

export default function Head({ styles, data }) {
  Head.propTypes = {
    styles: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
  };

  return (
    <div className={styles.itemProp} aria-hidden="true">
      <img src={data.image} alt="product image" className={styles.image} />
      <h4>{data.title}</h4>
    </div>
  );
}
