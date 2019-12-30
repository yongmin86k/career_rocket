import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const ButtonDefault = ({ type, isActiveSubmit, children }) => {
  return (
    <button
      style={
        isActiveSubmit
          ? {
              ...styles.default,
              ...styles.active
            }
          : {
              ...styles.default
            }
      }
      type={type}
      disabled={!isActiveSubmit}
    >
      {children}
    </button>
  );
};

export default ButtonDefault;

ButtonDefault.propTypes = {
  type: PropTypes.oneOf(["submit", "reset", "button"]).isRequired,
  isActiveSubmit: PropTypes.bool
};
