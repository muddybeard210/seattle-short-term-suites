import React, { Component } from "react";

class LoginPage extends Component {
  myInput = React.createRef();

  state = {};

  render() {
    return (
      <nav className="login">
        <h2>Inventory Login</h2>
        <p>Sign in to manage your inventory.</p>
        <button
          className="google"
          onClick={() => this.props.authenticate("Google")}
        >
          Log In With Gmail
        </button>
      </nav>
    );
  }
}

export default LoginPage;
