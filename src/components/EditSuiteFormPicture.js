import React, { Component } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

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

  handleClick = event => {
    event.preventDefault();
    Swal({
      title: "Are you sure?",
      text: "You will not be able to recover this image!",
      type: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        // Swal({
        //   title: "Deleted!",
        //   text: "Your image has been deleted.",
        //   type: "success",
        //   timer: 1000
        // });
        this.props.handleDeletePhoto(this.props.fileName);
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal("Cancelled", "Your image is safe :)", "error");
      }
    });
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
