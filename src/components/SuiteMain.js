import React, { Component } from "react";
import styled from "styled-components";

const StyledBannerContent = styled.div`
  background: url(${props => props.imageBackground});
`;

class SuiteMain extends Component {
  state = {
    suite: {}
  };
  componentWillMount() {
    const suite = this.props.suites[this.props.match.params.suiteName];
    this.setState({
      suite
    });
  }

  render() {
    if (this.state.suite)
      return (
        <StyledBannerContent imageBackground={this.state.suite.image[0].url}>
          <h3>{this.state.suite.name}</h3>
        </StyledBannerContent>
      );
  }
}

export default SuiteMain;
