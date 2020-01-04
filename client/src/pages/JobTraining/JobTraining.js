import React from "react";
import styles from "./styles";
import PropTypes from "prop-types";

const JobTraining = ({ token, refreshTokenFn }) => {
  return <div style={styles.page}>Job Training</div>;
};

export default JobTraining;

JobTraining.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
