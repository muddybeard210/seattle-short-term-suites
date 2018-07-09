import React, { Component } from "react";
import loginBackground from "../media/loginBackground.jpg";
import styled from "styled-components";

const Div = styled.div`
  height: 100%;
  width: 100%;
  background: url(${loginBackground});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoginCard = Div.extend`
  background: #fefefe;
  max-height: 375px;
  max-width: 425px;
  box-shadow: 0px 0px 26px 2px grey;
`;
const StyledH1 = styled.h1`
  margin: 0px;
  font-size: 30px;
`;
const StyledButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 30px;
  background-color: #fefefe;
  cursor: pointer;
`;

class LoginPage extends Component {
  myInput = React.createRef();

  state = {};

  render() {
    return (
      <Div className="login">
        <LoginCard>
          <StyledH1>Seattle Short Term Suites</StyledH1>
          <p>Sign in to manage your inventory.</p>
          <StyledButton
            className="google"
            onClick={() => this.props.authenticate("Google")}
          >
            Login With Gmail
          </StyledButton>
        </LoginCard>
      </Div>
    );
  }
}

export default LoginPage;
