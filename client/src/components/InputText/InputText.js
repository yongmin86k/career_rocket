import React, { useState } from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const InputText = props => {
  const { input } = props;
  const [isActive, setActive] = useState(false);

  return (
    <label style={{ ...props.style }}>
      <p style={{ ...styles.labelText }}>{props.label}</p>
      <input
        {...input}
        style={
          isActive
            ? { ...styles.field, ...styles.activeField }
            : { ...styles.field }
        }
        type={props.type}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        onFocus={() => {
          setActive(true);
        }}
        onBlur={() => {
          setActive(false);
        }}
        value={props.input.value}
      />
    </label>
  );
};

export default InputText;

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  label: PropTypes.string,
  autoComplete: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object
};
