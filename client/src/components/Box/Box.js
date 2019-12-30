import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const Box = props => {
  return (
    <div style={{ ...styles.box, ...props.style }}>
      <>{props.children}</>
    </div>
  );
};

export default Box;

Box.propTypes = {
  styles: PropTypes.object
};
