import React, { Component } from "react";
import MainNav from "./MainNav";
import About from "./About";
import Home from "./Home";
import Footer from "./Footer";
import Availability from "./Availability";
import "../css/App.css";
import { Route } from "react-router-dom";
import base from "../base";
import { injectGlobal } from "styled-components";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Dancing+Script|Lobster|Marck+Script|Yellowtail');
`;

class App extends Component {
  state = {
    suites: {}
  };
  componentDidMount() {
    const storeID = "short-term-suites";

    // this.databseReference is a made up custom name.  not built in.
    this.databaseReference = base.syncState(`${storeID}/suites`, {
      context: this,
      state: "suites"
    });
    // this.loadSampleUnits();
  }
  render() {
    return (
      <div>
        <div>
          <MainNav />
        </div>
        <div>
          <Route
            path={`/app/availability/:suiteName`}
            component={Availability}
          />
          <Route exact path={`/app/availability/`} component={Availability} />
          <Route exact path={"/app/About"} component={About} />
          <Route exact path={"/app/Home"} component={Home} />
          <Route exact path={"/app/suite/:suiteName"} component={Home} />
          <Route exact path={"/"} component={Home} />
          {/* <Route component={Home} /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
