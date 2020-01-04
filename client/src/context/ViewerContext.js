import React, { Component } from "react";
import decode from "jwt-decode";
import GLOBAL from "../global";

export class ViewerProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null
    };
  }

  componentDidMount() {
    this.bootStrapData();
  }

  getTokenExpirationDate = token => {
    const decoded = decode(token);
    if (!decoded.exp) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  };

  isTokenExpired = token => {
    const date = this.getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
  };

  refreshTokenFn = (data = null) => {
    const token = data[GLOBAL.AUTH_TOKEN];

    if (token) {
      localStorage.setItem(GLOBAL.AUTH_TOKEN, token);
    } else {
      localStorage.removeItem(GLOBAL.AUTH_TOKEN);
    }

    this.setState({ token });
  };

  bootStrapData = () => {
    try {
      const token = localStorage.getItem(GLOBAL.AUTH_TOKEN);

      if (token !== null && token !== undefined) {
        const expired = this.isTokenExpired(token);

        if (!expired) {
          this.setState({ token });
        } else {
          localStorage.removeItem(GLOBAL.AUTH_TOKEN);
          this.setState({ token: null });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <ViewerContext.Provider
        value={{
          refreshTokenFn: this.refreshTokenFn
        }}
      >
        {this.props.children}
      </ViewerContext.Provider>
    );
  }
}

const ViewerContext = React.createContext();

export default ViewerContext;
