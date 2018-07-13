import React, { Component } from "react";
import styled from "styled-components";

const PictureHolderDiv = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 180px;
  background-color: #d3d3d34f;
`;
const PictureHolderImg = styled.img`
  height: 90%;
  padding-right: 20px;
`;
const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`;
const StyledWrapper = styled.div`
  margin: 10px;
  padding: 5px;
  box-shadow: 0px 0px 10px 0px black;
  border-radius: 4px;
`;
const InputHolder = styled.div`
  /* & > div input, textarea, select {
    border: 1px solid grey;
    padding: 10px;
    margin: 5px 0px;
    &::placeholder {
      color: lightgrey;
      font-size: 12px;
    } */
`;
const StyledDeleteButton = styled.button`
  margin-top: 5px;
`;

class EditFishForm extends Component {
  state = {};
  componentDidMount() {
    console.log("image:", this.props.suite.image);
  }
  handleChange = event => {
    const updateSuite = {
      ...this.props.suite,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateSuite(this.props.index, updateSuite);
  };
  handleDelete = event => {
    this.props.deleteSuite(this.props.index);
  };
  render() {
    return (
      <StyledWrapper>
        <InputHolder>
          <FlexDiv>
            <label htmlFor="name">Suite Name</label>
            <input
              name="name"
              value={this.props.suite.name}
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
            />
            <label htmlFor="price">Price Per Month</label>
            <input
              name="price"
              value={this.props.suite.price}
              onChange={this.handleChange}
              type="text"
              placeholder="Price"
            />
            <label htmlFor="addressLineOne">Address</label>
            <input
              name="addressLineOne"
              value={this.props.suite.addressLineOne}
              onChange={this.handleChange}
              type="text"
              placeholder="Address Line One"
            />
            <input
              name="addressLineTwo"
              value={this.props.suite.addressLineTwo}
              onChange={this.handleChange}
              type="text"
              placeholder="Address Line Two"
            />
            <label htmlFor="status">Availability Status</label>
            <select
              name="status"
              value={this.props.suite.status}
              placeholder="Status"
              onChange={this.handleChange}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <label htmlFor="nextAvailableDate">Address</label>
            <input
              name="nextAvailableDate"
              value={this.props.suite.nextAvailableDate}
              onChange={this.handleChange}
              type="text"
              placeholder="Next Available Date"
            />
            <label htmlFor="desc">Suite Description</label>
            <textarea
              name="desc"
              value={this.props.suite.desc}
              placeholder="Desc"
              onChange={this.handleChange}
            />
          </FlexDiv>
        </InputHolder>
        <PictureHolderDiv>
          {this.props.suite.image.map(imgObj => (
            <PictureHolderImg key={imgObj.filename} src={imgObj.url} />
          ))}
        </PictureHolderDiv>
        <StyledDeleteButton
          className="btn btn-outline-danger"
          onClick={this.handleDelete}
        >
          Delete Suite
        </StyledDeleteButton>
      </StyledWrapper>
    );
  }
}

export default EditFishForm;
