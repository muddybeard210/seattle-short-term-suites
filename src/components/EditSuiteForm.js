import React, { Component } from "react";
import styled from "styled-components";
import EditSuiteFormPicture from "./EditSuiteFormPicture";
import FileUploadInput from "./FileUploadInput";
import JoditInput from "./JoditInput";
import firebase from "firebase";

const PictureHolderDiv = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  height: 180px;
  background-color: #d3d3d3;
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
  background-color: #fefefed9;
`;

const StyledDeleteButton = styled.button`
  margin-top: 5px;
  background-color: #fefefe;
`;

class EditFishForm extends Component {
  state = {
    pictures: []
  };
  componentDidMount() {}
  handleChange = event => {
    const updateSuite = {
      ...this.props.suite,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateSuite(this.props.index, updateSuite);
  };
  updateDescription = updatedDescription => {
    const updateSuite = {
      ...this.props.suite,
      desc: updatedDescription
    };
    this.props.updateSuite(this.props.index, updateSuite);
  };
  handleDelete = event => {
    this.props.deleteSuite(this.props.index);
  };

  handleDeletePhoto = imageName => {
    const suite = { ...this.props.suite };

    suite.image = suite.image.filter(function(imageObj) {
      return imageObj.filename !== imageName;
    });

    this.props.deleteSuitePhoto(suite.name, suite.image);
  };
  updatePictures = (url, filename) => {
    const suite = { ...this.props.suite };
    if (!suite.image) {
      suite.image = [];
    }
    const storedFile = {
      filename: filename,
      url: url
    };
    suite.image.push(storedFile);

    this.props.updateSuite(this.props.index, suite);
  };
  render() {
    return (
      <StyledWrapper>
        <div>
          <FlexDiv>
            <label htmlFor="name">Suite Name</label>
            <input
              name="name"
              value={this.props.suite.name}
              onChange={this.handleChange}
              type="text"
              placeholder="Name"
              readOnly
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
            <label htmlFor="nextAvailableDate">Next Available Date</label>
            <input
              name="nextAvailableDate"
              value={this.props.suite.nextAvailableDate}
              onChange={this.handleChange}
              type="text"
              placeholder="Next Available Date"
            />
            <label htmlFor="cardDesc">Card Description</label>
            <textarea
              name="cardDesc"
              value={this.props.suite.cardDesc || null}
              onChange={this.handleChange}
              placeholder="Card Description (Keep it short)"
            />
            <label htmlFor="desc">Main Suite Description</label>
            <JoditInput
              name="desc"
              suite={this.props.suite}
              index={this.props.index}
              updateDescription={this.updateDescription}
              currentDesc={this.props.suite.desc}
            />
            <div>
              <label htmlFor="numberOfBeds">
                <i className="fas fa-bed" />
              </label>
              <input
                type="number"
                name="numberOfBeds"
                value={
                  this.props.suite.numberOfBeds
                    ? this.props.suite.numberOfBeds
                    : "0"
                }
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="numberOfBath">
                <i className="fas fa-bath" />
              </label>
              <input
                type="number"
                name="numberOfBath"
                value={
                  this.props.suite.numberOfBath
                    ? this.props.suite.numberOfBath
                    : "0"
                }
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="numberOfParking">
                <i className="fas fa-car" />
              </label>
              <input
                type="number"
                name="numberOfParking"
                value={
                  this.props.suite.numberOfParking
                    ? this.props.suite.numberOfParking
                    : "0"
                }
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="squareFeet">Size (Sq Feet)</label>
              <input
                type="number"
                name="squareFeet"
                value={
                  this.props.suite.squareFeet
                    ? this.props.suite.squareFeet
                    : "0"
                }
                onChange={this.handleChange}
              />
            </div>
          </FlexDiv>
        </div>
        <FileUploadInput
          storageRef={firebase.storage().ref("images")}
          updatePictures={this.updatePictures}
        />
        <PictureHolderDiv>
          {this.props.suite.image
            ? this.props.suite.image.map(imgObj => (
                <EditSuiteFormPicture
                  key={imgObj.filename}
                  imageSource={imgObj.url}
                  fileName={imgObj.filename}
                  handleDeletePhoto={this.handleDeletePhoto}
                />
              ))
            : null}
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
