import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewerContext from "../context/ViewerContext";
import { Home, Overview, JobTraining, Logout } from "../pages";
import { BottomTab, PrivateRoute, SideBar } from "../components";
import { useMediaQuery } from "../hooks";
import GLOBAL from "../global";

const Routes = props => {
  const token = localStorage.getItem(GLOBAL.AUTH_TOKEN);
  const { refreshTokenFn } = useContext(ViewerContext);
  const isMedia = useMediaQuery();

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
        <PrivateRoute exact path="/logout" component={Logout} />
        <PrivateRoute
          exact
          path="/job_training/:trainingID"
          component={JobTraining}
        />
        <PrivateRoute exact path="/main/job_training" component={Overview} />
        <PrivateRoute exact path="/main/process" component={Overview} />
        <PrivateRoute exact path="/main/status" component={Overview} />
        <PrivateRoute exact path="/main" component={Overview} />
        <Redirect from="*" to="/main" />
      </Switch>
      {isMedia === "mobile" ? <BottomTab /> : <SideBar />}
    </>
  );
};

export default Routes;
