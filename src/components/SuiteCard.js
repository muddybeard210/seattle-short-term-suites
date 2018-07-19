import React, { Component } from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 33%;
  & > div > img {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
`;
const StyledImageHolder = styled.div``;
class SuiteCard extends Component {
  state = {};
  render() {
    return (
      <StyledCardWrapper>
        <div>
          <img src={this.props.suite.image[0].url} alt="" />
        </div>
      </StyledCardWrapper>
    );
  }
}

export default SuiteCard;
