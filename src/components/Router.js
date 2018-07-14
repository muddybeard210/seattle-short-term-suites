import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Inventory from "./Inventory";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/app/:suiteName" component={App} />
      <Route exact path="/administration" component={Inventory} />
      <Route component={App} />
    </Switch>
  </BrowserRouter>
);

export default Router;
