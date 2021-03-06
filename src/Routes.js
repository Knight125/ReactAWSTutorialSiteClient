import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import HomeAll from "./containers/HomeAll";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import ContentView from "./containers/ContentView";
import ContentView2 from "./containers/ContentView";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/site/allpublicnotes"
      exact
      component={Home}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/site/allnotes"
      exact
      component={HomeAll}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/site/new"
      exact
      component={NewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/site/:id"
      exact
      component={Notes}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/site/allnotes/:id"
      exact
      component={ContentView2}
      props={childProps}
    />

    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
