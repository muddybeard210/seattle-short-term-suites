import React, { Component } from "react";
import styled from "styled-components";
import SuiteCardAmens from "./SuiteCardAmens";

const StyledCardWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  width: 400px;
  min-height: 600px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  padding-bottom: 20px;
  cursor: pointer;
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
  transition: all 0.4s ease;
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

const StyledSpan = styled.span`
  color: #fff;
  background-color: #007bff;
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
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
        <SuiteCardAmens suite={this.props.suite} />
        <StyledDescHolder>
          <p>{this.props.suite.desc.slice(0, 230)}...</p>
        </StyledDescHolder>
        <div>
          <StyledSpan className="badge badge-primary">
            {this.props.suite.price} / Per Month
          </StyledSpan>
        </div>
      </StyledCardWrapper>
    );
  }
}

export { StyledAvailabilitySign };

export default SuiteCard;
