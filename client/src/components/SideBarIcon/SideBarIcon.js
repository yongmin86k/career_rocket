import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import PropTypes from "prop-types";

const SideBarIcon = ({ link, image, alt, style }) => {
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
      <div
        style={
          isActive
            ? { ...styles.navLink, ...styles.active, ...style }
            : { ...styles.navLink, ...style }
        }
      >
        <img src={`/images/${image}`} alt={alt} />
      </div>
    </NavLink>
  );
};

export default SideBarIcon;

SideBarIcon.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object
};
