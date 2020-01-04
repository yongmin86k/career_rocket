import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewerContext from "../context/ViewerContext";
import { Home, Overview, JobTraining } from "../pages";
import { BottomTab, PrivateRoute } from "../components";
import GLOBAL from "../global";

const Routes = props => {
  const token = localStorage.getItem(GLOBAL.AUTH_TOKEN);
  const { refreshTokenFn } = useContext(ViewerContext);

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
    <>
      <Switch>
        <PrivateRoute exact path="/job_training" component={JobTraining} />
        <PrivateRoute exact path="/main" component={Overview} />
        <Redirect from="*" to="/main" />
      </Switch>
      <BottomTab />
    </>
  );
};

export default Routes;
