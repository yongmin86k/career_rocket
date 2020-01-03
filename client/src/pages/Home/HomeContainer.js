import React, { Component } from "react";
import Home from "./Home";
import PropTypes from "prop-types";

class HomeContainer extends Component {
  render() {
    const { refreshTokenFn } = this.props;

    return <Home refreshTokenFn={refreshTokenFn} />;
  }
}

export default HomeContainer;

HomeContainer.propTypes = {
  refreshTokenFn: PropTypes.func
};
