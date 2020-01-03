import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const ButtonError = ({ type, children, onClose }) => {
  return (
    <button
      style={{
        ...styles.default
      }}
      type={type}
      onClick={() => {
        onClose(null);
      }}
    >
      {children}
    </button>
  );
};

export default ButtonError;

ButtonError.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
  onClose: PropTypes.func
};
