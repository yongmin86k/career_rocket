import React, { Component } from "react";
import Overview from "./Overview";
import PropTypes from "prop-types";

class OverviewContainer extends Component {
  render() {
    const { token, refreshTokenFn } = this.props;
    return <Overview token={token} refreshTokenFn={refreshTokenFn} />;
  }
}

export default OverviewContainer;

OverviewContainer.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
