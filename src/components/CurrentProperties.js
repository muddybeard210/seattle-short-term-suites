import React, { Component } from "react";
import SuiteCard from "./SuiteCard";
import styled from "styled-components";

const StyledSuiteCardHolder = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 50px;
`;
const StyledSectionHeader = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  & h1 {
    font-size: 50px;
    text-align: center;
  }
`;

class CurrentProperties extends Component {
  state = {};
  render() {
    return (
      <div>
        <StyledSectionHeader>
          <h1>Current Properties</h1>
        </StyledSectionHeader>
        <StyledSuiteCardHolder>
          {Object.keys(this.props.suites).map(
            key =>
              this.props.suites[key].status === "available" ? (
                <SuiteCard
                  key={key}
                  index={key}
                  name={key}
                  suite={this.props.suites[key]}
                />
              ) : null
          )}
        </StyledSuiteCardHolder>
      </div>
    );
  }
}

export default CurrentProperties;
