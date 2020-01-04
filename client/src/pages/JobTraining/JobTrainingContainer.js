import React, { Component } from "react";
import JobTraining from "./JobTraining";
import PropTypes from "prop-types";

class JobTrainingContainer extends Component {
  render() {
    const { token, refreshTokenFn } = this.props;
    return <JobTraining token={token} refreshTokenFn={refreshTokenFn} />;
  }
}

export default JobTrainingContainer;

JobTrainingContainer.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
