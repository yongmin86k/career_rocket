import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewerContext from "../context/ViewerContext";
import { Home, Main } from "../pages";
import { PrivateRoute } from "../components";

const Routes = props => {
  return (
    <ViewerContext.Consumer>
      {({ token }) => {
        if (!token) {
          return (
            <Switch>
              <Route exact path="/" component={Home} />
              <Redirect from="*" to="/" />
            </Switch>
          );
        }
        return (
          <Switch>
            <PrivateRoute exact path="/main" component={Main} />
            <Redirect from="*" to="/main" />
          </Switch>
        );
      }}
    </ViewerContext.Consumer>
  );
};

export default Routes;
