import React, { Component } from "react";
import Banner from "./Banner";
import SuiteCard from "./SuiteCard";
import base from "../base";
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
class Home extends Component {
  state = {
    suites: {}
  };
  componentDidMount() {
    const storeID = "short-term-suites";

    // this.databseReference is a made up custom name.  not built in.
    this.databaseReference = base.syncState(`${storeID}/suites`, {
      context: this,
      state: "suites"
    });
    // this.loadSampleUnits();
  }
  render() {
    return (
      <div>
        <Banner header="Short Term Suites" subhead="Where Seattle Sleeps..." />
        <StyledSectionHeader>
          <h1>Current Properties</h1>
        </StyledSectionHeader>
        <StyledSuiteCardHolder>
          {Object.keys(this.state.suites).map(key => (
            <SuiteCard
              key={key}
              index={key}
              name={key}
              suite={this.state.suites[key]}
            />
          ))}
        </StyledSuiteCardHolder>
      </div>
    );
  }
}

export default Home;
