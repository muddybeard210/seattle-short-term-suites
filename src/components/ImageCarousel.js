import React, { Component } from "react";
import styled from "styled-components";

const MainImgHolder = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
const MainWrapperDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const MainImg = styled.img`
  height: 100%;
`;
const MiniImg = styled.img`
  height: 100px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
`;
const StyledMiniImgHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class ImageCarousel extends Component {
  state = {
    imageToShow: this.props.images[0].url
  };
  handleClick = event => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
    this.setState({
      imageToShow: this.props.images[event.target.name].url
    });
  };
  render() {
    if (this.props.images)
      return (
        <MainWrapperDiv>
          <MainImgHolder>
            <MainImg src={this.state.imageToShow || null} />
          </MainImgHolder>
          <StyledMiniImgHolder>
            {this.props.images.map((image, index) => (
              <MiniImg
                onClick={this.handleClick}
                name={index}
                src={image.url}
                key={index}
                active={false}
              />
            ))}
          </StyledMiniImgHolder>
        </MainWrapperDiv>
      );
  }
}

export default ImageCarousel;
