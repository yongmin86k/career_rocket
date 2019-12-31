import React from "react";
import { Route, Redirect } from "react-router-dom";
import ViewerContext from "../../context/ViewerContext";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  return (
    <ViewerContext.Consumer>
      {({ token, refreshTokenFn }) => {
        return token ? (
          <Route
            {...rest}
            render={(props, a, b) => {
              return (
                <Component
                  {...props}
                  token={token}
                  refreshTokenFn={refreshTokenFn}
                />
              );
            }}
          />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default PrivateRoute;
