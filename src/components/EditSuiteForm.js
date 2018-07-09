import React, { Component } from "react";
import styled from "styled-components";

const PictureHolderDiv = styled.div`
  display: flex;
  overflow-x: scroll;
  height: 400px;
`;
const PictureHolderImg = styled.img`
  height: 100%;
  padding-right: 20px;
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
      <div className="suite-edit">
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
