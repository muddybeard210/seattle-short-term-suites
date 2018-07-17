import React, { Component } from "react";
import Banner from "./Banner";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Banner header="Short Term Suites" subhead="Where Seattle Sleeps..." />
      </div>
    );
  }
}

export default Home;
