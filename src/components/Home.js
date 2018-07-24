import React, { Component } from "react";
import Banner from "./Banner";
import CurrentProperties from "./CurrentProperties";
import base from "../base";

class Home extends Component {
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
  pushToSuite = name => {
    this.props.history.push(`/app/suite/${name}`);
  };
  render() {
    return (
      <div>
        <Banner header="Short Term Suites" subhead="Where Seattle Sleeps..." />
        <CurrentProperties
          suites={this.state.suites}
          pushToSuite={this.pushToSuite}
        />
      </div>
    );
  }
}

export default Home;
