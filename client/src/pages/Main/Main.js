import React from "react";
import styles from "./styles";
import GLOBAL from "../../global";
import PropTypes from "prop-types";

const Main = ({ token, refreshTokenFn }) => {
  return (
    <div style={styles.main}>
      <div
        onClick={() => {
          refreshTokenFn({
            [GLOBAL.AUTH_TOKEN]: null
          });
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
