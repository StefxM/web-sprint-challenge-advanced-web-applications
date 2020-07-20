import React from "react";
import { Route, Redirect } from "react-router-dom";
import BubblePage from "./components/BubblePage";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) return <BubblePage />;
        else return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;