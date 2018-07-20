import React, { Component } from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 300px;
  min-height: 500px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;
const StyledCardImageWrapper = styled.div`
  height: 200px;
  background: url(${props => props.imageBackground});
  width: 100%;
  background-size: 100%;
  background-position: center;
  transition: all 0.1s ease-in;
  &:hover {
    background-size: 110%;
  }
`;
const StyledAvailabilitySign = styled.div`
  background-color: ${props => (props.available ? "green" : "red")};
`;
class SuiteCard extends Component {
  state = {};
  render() {
    return (
      <StyledCardWrapper>
        <StyledCardImageWrapper imageBackground={this.props.suite.image[0].url}>
          <StyledAvailabilitySign
            available={this.props.suite.status == "available" ? true : false}
          >
            {this.props.suite.status}
          </StyledAvailabilitySign>
        </StyledCardImageWrapper>
      </StyledCardWrapper>
    );
  }
}

export default SuiteCard;
