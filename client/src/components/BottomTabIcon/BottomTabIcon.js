import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const BottomTabIcon = ({ active, label, image }) => {
  return (
    <div style={styles.container}>
      <div>
        <div
          style={
            active
              ? { ...styles.wrapper, ...styles.activeWrapper }
              : { ...styles.wrapper }
          }
        >
          <img
            src={`/images/${image}${active ? "-active" : "-inactive"}.svg`}
            alt={label}
          />
        </div>
        <p
          style={
            active
              ? { ...styles.label, ...styles.activeLabel }
              : { ...styles.label }
          }
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default BottomTabIcon;

BottomTabIcon.propTypes = {
  active: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  image: PropTypes.string
};
