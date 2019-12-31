import React, { Component } from "react";
import Main from "./Main";
import PropTypes from "prop-types";

class MainContainer extends Component {
  render() {
    const { token, refreshTokenFn } = this.props;
    return <Main token={token} refreshTokenFn={refreshTokenFn} />;
  }
}

export default MainContainer;

MainContainer.propTypes = {
  token: PropTypes.string.isRequired,
  refreshTokenFn: PropTypes.func
};
