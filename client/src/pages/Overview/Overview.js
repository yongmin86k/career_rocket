import React from "react";
import styles from "./styles";
import GLOBAL from "../../global";
import PropTypes from "prop-types";

const Overview = ({ token, refreshTokenFn }) => {
  return (
    <div style={styles.page}>
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

export default Overview;

Overview.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
