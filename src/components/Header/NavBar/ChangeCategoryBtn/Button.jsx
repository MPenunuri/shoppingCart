import PropTypes from "prop-types";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function Button({
  content,
  style,
  label,
  menu,
  setMenuVisible,
  location,
}) {
  Button.propTypes = {
    content: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    menu: PropTypes.object.isRequired,
    setMenuVisible: PropTypes.func.isRequired,
    location: PropTypes.string.isRequired,
  };

  const navigate = useNavigate();
  const btn = useRef();

  return (
    <button
      ref={btn}
      type="button"
      className={style}
      aria-label={label}
      key={uuidv4()}
      onClick={() => {
        menu.current.classList.add("addDisable");
        btn.current.classList.add("active");
        setTimeout(() => setMenuVisible(false), 1000);
        {
          location !== undefined && navigate(location);
        }
      }}
    >
      {content}
    </button>
  );
}
