import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Inventory from "./Inventory";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/administration" component={Inventory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
