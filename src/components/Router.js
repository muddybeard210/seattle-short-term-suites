import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Inventory from "./Inventory";
import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300');

  h1, h2, h3, h4 {
    font-family: Raleway, sans-serif;
  }
  p {
    font-family: 'Open Sans', sans-serif;
  }
  input, textarea, select {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  textarea {
    min-height: 160px;
  }
  body {
    font-family: 'Open Sans',sans-serif;
  }
`;

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
