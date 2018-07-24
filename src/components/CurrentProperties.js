import React, { Component } from "react";
import SuiteCard from "./SuiteCard";
import RefineSearch from "./RefineSearch";
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
  state = {
    filteredResults: {
      bedrooms: 0,
      bathrooms: 0,
      parking: 0
    }
  };
  handleRefine = updatedFilteredResults => {
    this.setState({
      filteredResults: updatedFilteredResults
    });
  };
  render() {
    return (
      <div>
        <StyledSectionHeader>
          <h1>Current Properties</h1>
        </StyledSectionHeader>
        <StyledSectionHeader>
          <RefineSearch handleRefine={this.handleRefine} />
        </StyledSectionHeader>
        <StyledSuiteCardHolder>
          {Object.keys(this.props.suites).map(
            key =>
              this.props.suites[key].status === "available" &&
              this.props.suites[key].numberOfBath >=
                this.state.filteredResults.bathrooms &&
              this.props.suites[key].numberOfBeds >=
                this.state.filteredResults.bedrooms &&
              this.props.suites[key].numberOfParking >=
                this.state.filteredResults.parking ? (
                <SuiteCard
                  key={key}
                  index={key}
                  name={key}
                  suite={this.props.suites[key]}
                  pushToSuite={this.props.pushToSuite}
                />
              ) : null
          )}
        </StyledSuiteCardHolder>
      </div>
    );
  }
}

export default CurrentProperties;
