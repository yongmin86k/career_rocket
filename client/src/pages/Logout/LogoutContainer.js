import React, { Component } from "react";
import { FullScreenLoader } from "../../components";
import GLOBAL from "../../global";
import PropTypes from "prop-types";

class Logout extends Component {
  componentDidMount() {
    const { refreshTokenFn } = this.props;
    refreshTokenFn({
      [GLOBAL.AUTH_TOKEN]: null
    });
  }

  render() {
    return <FullScreenLoader show={true} />;
  }
}

export default Logout;

Logout.propTypes = {
  refreshTokenFn: PropTypes.func
};
