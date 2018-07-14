import React, { Component } from "react";
class Availability extends Component {
  state = {};
  render() {
    return (
      <div>
        <h3>Availability</h3>
        <p>{this.props.match.params.suiteName}</p>
      </div>
    );
  }
}

export default Availability;
