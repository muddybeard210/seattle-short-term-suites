import React, { Component } from "react";
import styled from "styled-components";
import homeBanner from "../media/homeBanner.jpg";

const StyledBannerHolder = styled.div`
  height: 100%;
  width: 100%;
  max-height: 1000px;
  min-height: 760px;
  background: url(${homeBanner});
  background-size: cover;
  background-position-y: -110px;
  transition: all 2s;
  opacity: ${props => props.hidethis};

  @media screen and (max-width: 1560px) {
    background-position-y: 0px;
  }
`;

class Banner extends Component {
  state = {
    hidethis: 1
  };

  render() {
    return (
      <StyledBannerHolder>
        <h1 hidethis={this.state.hidethis}>Short Term Suites</h1>
      </StyledBannerHolder>
    );
  }
}

export default Banner;
