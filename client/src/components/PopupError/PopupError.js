import React from "react";
import ButtonError from "../ButtonError";
import styles from "./styles";
import PropTypes from "prop-types";

const PopupError = ({ errorMsg = "Something went wrong", onClose }) => {
  return (
    <div style={styles.modalContainer}>
      <div style={styles.popup}>
        <img style={styles.iconError} src="/images/ic-error.svg" alt="error" />
        <h2 style={styles.title}>Error</h2>
        <p style={styles.errorText}>{errorMsg}</p>

        <ButtonError type="button" onClose={onClose}>
          Close
        </ButtonError>
      </div>
    </div>
  );
};

export default PopupError;

PopupError.propTypes = {
  errorMsg: PropTypes.string,
  onClose: PropTypes.func
};
