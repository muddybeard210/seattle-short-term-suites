import React, { Component } from "react";
import styled from "styled-components";

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

class SuiteCardAmens extends Component {
  state = {};
  render() {
    return (
      <div>
        <StyledAmens>
          <i className="fas fa-bed" />{" "}
          {this.props.suite.numberOfBeds ? this.props.suite.numberOfBeds : "0"}{" "}
          Bed
        </StyledAmens>
        <StyledAmens>
          <i className="fas fa-bath" />{" "}
          {this.props.suite.numberOfBath ? this.props.suite.numberOfBath : "0"}{" "}
          Bath
        </StyledAmens>
        <StyledAmens>
          <i className="fas fa-car" />{" "}
          {this.props.suite.numberOfParking
            ? this.props.suite.numberOfParking
            : "0"}{" "}
          Park
        </StyledAmens>
      </div>
    );
  }
}

export default SuiteCardAmens;
