import React from "react";
import ButtonError from "../ButtonError";
import styles from "./styles";
import { useMediaQuery } from "../../hooks";
import PropTypes from "prop-types";

const PopupError = ({ errorMsg = "Something went wrong", onClose }) => {
  const isMedia = useMediaQuery();

  return (
    <div style={styles.modalContainer}>
      <div style={styles.popup(isMedia)}>
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
