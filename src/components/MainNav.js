import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
  runFunction = event => {
    event.preventDefault();
    console.log(this);
  };
  state = {};
  render() {
    return (
      <div>
        <Link to="/app/home">Home</Link>
        <Link to="/app/about">About</Link>
        <Link to="/app/availability">Availability</Link>
        <Link to="/app/faq">FAQ</Link>
      </div>
    );
  }
}

export default MainNav;
