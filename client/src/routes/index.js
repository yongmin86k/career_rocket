import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewerContext from "../context/ViewerContext";
import { Home, Overview } from "../pages";
import { PrivateRoute } from "../components";

const Routes = props => {
  const { token, refreshTokenFn } = useContext(ViewerContext);

  return !token ? (
    <Switch>
      <Route
        exact
        path="/"
        children={props => {
          return <Home refreshTokenFn={refreshTokenFn} />;
        }}
      />
      <Redirect from="*" to="/" />
    </Switch>
  ) : (
    <Switch>
      <PrivateRoute exact path="/main" component={Overview} />
      <Redirect from="*" to="/main" />
    </Switch>
  );
};

export default Routes;
