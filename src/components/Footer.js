import React, { Component } from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  margin: 10px;
  padding: 10px;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <StyledFooter>
        <h4>
          Call us at 555-555-5555 or email us at{" "}
          <a href="mailto:shorttermsuites@gmail.com">
            shorttermsuites@gmail.com
          </a>{" "}
          to book a suite today!
        </h4>
      </StyledFooter>
    );
  }
}

export default Footer;
