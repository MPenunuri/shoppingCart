import PropTypes, { number, string } from "prop-types";

export default function Props({ styles, tag, content }) {
  Props.propTypes = {
    styles: PropTypes.object.isRequired,
    tag: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([string, number]).isRequired,
  };

  function toCamelCase(sentence) {
    return sentence
      .split(" ")
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join("");
  }

  return (
    <div className={styles.itemProp} aria-hidden="true">
      <p id={`${toCamelCase(tag)}Label`}>{tag + ":"}</p>
      <p
        id={`${toCamelCase(tag)}`}
        aria-labelledby={`${toCamelCase(tag)}Label`}
      >
        {content}
      </p>
    </div>
  );
}
