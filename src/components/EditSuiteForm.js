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
`;

const InputHolder = styled.div`
   & > input, textarea, select {
    background: #4e4a59;
    border: 1px solid grey;
    padding: 10px;
    color: white;
    &::placeholder {
      color: white;
    }
`;

class EditFishForm extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.suite.image);
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
      <div>
        <InputHolder>
          <FlexDiv>
            <input
              name="name"
              value={this.props.suite.name}
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
            />
            <input
              name="price"
              value={this.props.suite.price}
              onChange={this.handleChange}
              type="text"
              placeholder="Price"
            />
          </FlexDiv>
          <FlexDiv>
            <select
              name="status"
              value={this.props.suite.status}
              placeholder="Status"
              onChange={this.handleChange}
            >
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
            <textarea
              name="desc"
              value={this.props.suite.desc}
              placeholder="Desc"
              onChange={this.handleChange}
            />
          </FlexDiv>
        </InputHolder>
        <PictureHolderDiv>
          {this.props.suite.image.map((imageUrl, index) => (
            <PictureHolderImg key={index} src={imageUrl} />
          ))}
        </PictureHolderDiv>
        <button onClick={this.handleDelete}>Delete Suite</button>
      </div>
    );
  }
}

export default EditFishForm;
