import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import homeBanner from "../media/homeBanner.jpg";

const StyledBannerHolder = styled.div`
  height: 100%;
  width: 100%;
  max-height: 1000px;
  min-height: 760px;
  background: url(${homeBanner});
  background-size: cover;
  background-position-y: -110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: center; */
  & > div {
    text-align: center;
  }

  @media screen and (max-width: 1560px) {
    background-position-y: 0px;
  }
`;
const fadeInHeader = keyframes`
  from {
    opacity: 0;
    margin-top: 0px;
  }

  to {
    opacity: 1;
    margin-top: 100px;
  }
`;
const fadeInText = keyframes`
  from {
    opacity: 0;
    margin-top: -70px;
  }

  to {
    opacity: 1;
    margin-top: 10px;
  }
`;
const fadeInTagLine = keyframes`
  from {
    opacity: 0;
    margin-top: 0px;
  }

  to {
    opacity: 1;
    margin-top: 210px;
  }
`;

const StyledH1 = styled.h1`
  transition: all 2s;
  font-size: 60px;
  animation: ${fadeInHeader} 2s forwards;
  animation-delay: 0.25s;
  opacity: 0;
  color: white;
`;
const StyledH2 = StyledH1.extend`
  font-size: 40px;
  animation: ${fadeInText} 2s forwards;
  animation-delay: 1s;
  opacity: 0;
  color: white;
`;

const StyledTagLine = StyledH2.extend`
  animation: ${fadeInTagLine} 3s forwards;
  animation-delay: 1.5s;
`;

const StyledHorzDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

class Banner extends Component {
  render() {
    return (
      <StyledBannerHolder>
        <div>
          <StyledH1>{this.props.header}</StyledH1>
          <StyledH2>{this.props.subhead}</StyledH2>
        </div>
        <StyledHorzDiv>
          <div>
            <StyledTagLine>{this.props.subhead}</StyledTagLine>
          </div>
          <div>
            <StyledTagLine>{this.props.subhead}</StyledTagLine>
          </div>
          <div>
            <StyledTagLine>{this.props.subhead}</StyledTagLine>
          </div>
        </StyledHorzDiv>
      </StyledBannerHolder>
    );
  }
}

export default Banner;
