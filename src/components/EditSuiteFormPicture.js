import React, { Component } from "react";
import styled from "styled-components";

const PictureHolderImg = styled.img`
  height: 90%;
  padding-right: 20px;
`;
const StyledImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StyledDeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
`;

class EditSuiteFormPicture extends Component {
  state = {};

  handleClick = () => {
    this.props.handleDeletePhoto(this.props.fileName);
  };

  render() {
    return (
      <StyledImageContainer>
        <StyledDeleteButton onClick={this.handleClick}>X</StyledDeleteButton>
        <PictureHolderImg src={this.props.imageSource} alt="" />
      </StyledImageContainer>
    );
  }
}

export default EditSuiteFormPicture;
