import React, { Component } from "react";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 600px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  &:hover {
    & > div {
      background-size: 130%;
    }
  }
`;
const StyledCardImageWrapper = styled.div`
  height: 300px;
  background: url(${props => props.imageBackground});
  width: 100%;
  background-size: 120%;
  background-position: center;
  transition: all 0.1s ease-in;
  background-repeat: no-repeat;
`;
const StyledAvailabilitySign = styled.div`
  background-color: ${props => (props.available ? "#28a745" : "#dc3545")};
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  color: #fff;
  margin: 10px;
`;

const StyledAmens = StyledAvailabilitySign.extend`
  background-color: #6c757d;
`;
const StyledAmensHolder = styled.div`
  display: inline;
`;
const StyledDescHolder = styled.div`
  /* text-align: justify; */
  padding: 10px;
`;

class SuiteCard extends Component {
  state = {};
  render() {
    return (
      <StyledCardWrapper>
        <StyledCardImageWrapper imageBackground={this.props.suite.image[0].url}>
          <StyledAvailabilitySign
            available={this.props.suite.status === "available" ? true : false}
          >
            {this.props.suite.status}
          </StyledAvailabilitySign>
        </StyledCardImageWrapper>
        <div>
          <h3>{this.props.suite.name}</h3>
        </div>
        <StyledDescHolder>
          <p>{this.props.suite.desc.slice(0, 230)}...</p>
        </StyledDescHolder>
        <div>
          <StyledAmens>4 Bed</StyledAmens>
          <StyledAmens>4 bath</StyledAmens>
          <StyledAmens>4 Park</StyledAmens>
        </div>
      </StyledCardWrapper>
    );
  }
}

export default SuiteCard;
