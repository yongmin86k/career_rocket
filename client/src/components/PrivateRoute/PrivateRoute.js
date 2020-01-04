import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ViewerContext from "../../context/ViewerContext";
import GLOBAL from "../../global";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const token = localStorage.getItem(GLOBAL.AUTH_TOKEN);
  const { refreshTokenFn } = useContext(ViewerContext);

  return token ? (
    <Route
      {...rest}
      render={props => {
        return (
          <Component {...props} token={token} refreshTokenFn={refreshTokenFn} />
        );
      }}
    />
  ) : (
    <Redirect to={{ pathname: "/", state: { from: location } }} />
  );
};

export default PrivateRoute;
