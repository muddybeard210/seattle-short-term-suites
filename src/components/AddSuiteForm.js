import React, { Component } from "react";
import FileUploadInput from "./FileUploadInput";
// import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: space-around;

  & > input {
    border: 1px solid grey;
    padding: 10px;
    border-radius: 0.25em;
    &::placeholder {
      color: lightgrey;
    }
  }
`;

class AddSuiteForm extends Component {
  state = {
    isUploading: false,
    progress: 0,
    files: [],
    pictures: []
  };

  nameInput = React.createRef();
  priceInput = React.createRef();
  statusInput = React.createRef();
  descInput = React.createRef();
  imageInput = React.createRef();
  addressLineOne = React.createRef();
  addressLineTwo = React.createRef();
  nextAvailableDate = React.createRef();
  numberOfBeds = React.createRef();
  numberOfBath = React.createRef();
  numberOfParking = React.createRef();
  squareFeetInput = React.createRef();

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  updatePictures = (url, filename) => {
    const pictures = this.state.pictures;
    const storedFile = {
      filename: filename,
      url: url
    };
    console.log("url:", url);
    pictures.push(storedFile);
    this.setState({
      pictures
    });
  };

  handleUploadSuccess = filename => {
    console.log("Upload successful", filename);
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref()
      .child(`images/${filename}`)
      .getDownloadURL()
      .then(url => {
        this.updatePictures(url, filename);
      });
  };

  createSuite = event => {
    // 1. Stop event from submitting
    // 2.
    event.preventDefault();

    const suite = {
      name: this.nameInput.current.value,
      price: this.priceInput.current.value,
      status: this.statusInput.current.value,
      desc: this.descInput.current.value,
      image: this.state.pictures,
      addressLineOne: this.addressLineOne.current.value,
      addressLineTwo: this.addressLineTwo.current.value,
      nextAvailableDate: this.nextAvailableDate.current.value,
      numberOfBeds: this.numberOfBeds.current.value,
      numberOfBath: this.numberOfBath.current.value,
      numberOfParking: this.numberOfParking.current.value
    };
    this.props.addSuite(suite);
    this.startUploadManually();
    event.currentTarget.reset();
  };

  handleOnChange = event => {
    const files = event.target.files;
    const filesToStore = [];

    files.forEach(file => filesToStore.push(file));
    this.setState({ files: filesToStore });
  };

  startUploadManually = () => {
    const { files } = this.state;
    files.forEach(file => {
      this.fileUploader.startUpload(file);
    });
  };

  testSomething = event => {
    event.preventDefault();
    console.log(this.nameInput);
  };
  render() {
    return (
      <StyledForm action="" className="suite-edit" onSubmit={this.createSuite}>
        {/* <StyledForm action="" className="suite-edit" onSubmit={this.testSomething}> */}
        <input
          required
          name="name"
          ref={this.nameInput}
          type="text"
          placeholder="Name"
        />
        <input
          required
          name="price"
          ref={this.priceInput}
          type="text"
          placeholder="Price"
        />
        <input
          required
          type="text"
          name="addressLineOne"
          ref={this.addressLineOne}
          placeholder="Address Line 1"
        />
        <input
          required
          type="text"
          name="addressLineTwo"
          ref={this.addressLineTwo}
          placeholder="Address Line 2"
        />
        <select
          required
          name="status"
          ref={this.statusInput}
          placeholder="Status"
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <input
          required
          type="date"
          name="nextAvailableDate"
          ref={this.nextAvailableDate}
          placeholder="Next Available Date"
        />
        <textarea name="desc" ref={this.descInput} placeholder="Desc" />
        <div>
          <label htmlFor="numberOfBeds">
            <i class="fas fa-bed" />
          </label>
          <input
            required
            type="number"
            name="numberOfBeds"
            ref={this.numberOfBeds}
          />
        </div>
        <div>
          <label htmlFor="numberOfBath">
            <i class="fas fa-bath" />
          </label>
          <input
            required
            type="number"
            name="numberOfBath"
            ref={this.numberOfBath}
          />
        </div>
        <div>
          <label htmlFor="numberOfParking">
            <i class="fas fa-car" />
          </label>
          <input
            required
            type="number"
            name="numberOfParking"
            ref={this.numberOfParking}
          />
        </div>
        <label htmlFor="squareFeetInput">Size (Sq Feet)</label>
        <input
          type="number"
          name="squareFeetInput"
          ref={this.squareFeetInput}
        />
        <FileUploadInput
          ref={this.imageInput}
          handleUploadStart={this.handleUploadStart}
          handleProgress={this.handleProgress}
          handleUploadError={this.handleUploadError}
          updatePictures={this.updatePictures}
          handleUploadSuccess={this.handleUploadSuccess}
          storageRef={firebase.storage().ref("images")}
          handleOnChange={this.handleOnChange}
        />
        <button className="btn btn-success" type="submit">
          Add Suite
        </button>
      </StyledForm>
    );
  }
}

export default AddSuiteForm;
