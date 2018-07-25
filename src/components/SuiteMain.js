import React, { Component } from "react";

class SuiteMain extends Component {
  state = {};
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <h3>{this.props.match.params.suiteName}</h3>
      </div>
    );
  }
}

export default SuiteMain;
