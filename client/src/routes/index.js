import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Home, Main } from "../pages";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
