import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import router from "./config";
import React from "react";
import Dashboard from "../component/Dashboard/Dasboard";

function RouterConfig() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Switch>
        {router.map((item, index) => (
          <Route
            key={index}
            exact
            path={item.path}
            component={item.component}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
}
export default RouterConfig;
