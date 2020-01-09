import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import PropTypes from "prop-types";

const BottomTabIcon = ({ label, image, link }) => {
  const [isActive, setActive] = useState(false);

  return (
    <NavLink
      to={link}
      isActive={match => {
        if (!match) {
          setActive(false);
        } else {
          setActive(true);
        }
      }}
    >
      <div style={styles.container}>
        <div>
          <div
            style={
              isActive
                ? { ...styles.wrapper, ...styles.activeWrapper }
                : { ...styles.wrapper }
            }
          >
            <img
              src={`/images/${image}${isActive ? "-active" : "-inactive"}.svg`}
              alt={label}
            />
          </div>
          <p
            style={
              isActive
                ? { ...styles.label, ...styles.activeLabel }
                : { ...styles.label }
            }
          >
            {label}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default BottomTabIcon;

BottomTabIcon.propTypes = {
  label: PropTypes.string.isRequired,
  image: PropTypes.string
};
