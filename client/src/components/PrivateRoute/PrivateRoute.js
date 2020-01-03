import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import ViewerContext from "../../context/ViewerContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { token, refreshTokenFn } = useContext(ViewerContext);

  return token ? (
    <Route
      {...rest}
      render={(props, a, b) => {
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
