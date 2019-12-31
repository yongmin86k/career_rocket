import React, { Component } from "react";
import Home from "./Home";
import ViewerContext from "../../context/ViewerContext";

class HomeContainer extends Component {
  render() {
    return (
      <ViewerContext.Consumer>
        {({ refreshTokenFn }) => <Home refreshTokenFn={refreshTokenFn} />}
      </ViewerContext.Consumer>
    );
  }
}

export default HomeContainer;
