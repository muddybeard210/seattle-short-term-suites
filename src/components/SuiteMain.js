import React, { Component } from "react";
import styled from "styled-components";

const StyledBannerContent = styled.div`
  background: url(${props => props.imageBackground});
`;

class SuiteMain extends Component {
  state = {
    suite: {}
  };
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    if (nextProps.suites !== this.props.suites) {
      this.setState({
        suite: nextProps.suites[this.props.match.params.suiteName]
      });
    }
  }
  render() {
    if (this.state.suite)
      return (
        <StyledBannerContent
          imageBackground={
            this.state.suite.image ? this.state.suite.image[0].url : null
          }
        >
          <h3>{this.state.suite.name}</h3>
        </StyledBannerContent>
      );
  }
}

export default SuiteMain;
