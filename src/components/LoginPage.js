import React, { Component } from "react";
class LoginPage extends Component {
  myInput = React.createRef();

  state = {};
  render() {
    return (
      <div>
        <form action="" className="loginForm">
          <h2>Username</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="username"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
