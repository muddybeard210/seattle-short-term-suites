import React, { Component } from "react";
import FileUploadInput from "./FileUploadInput";
// import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  max-height: 360px;

  & > input {
    background: #4e4a59;
    border: 1px solid grey;
    padding: 10px;
    color: white;
    &::placeholder {
      color: white;
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

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  updatePictures = newPicture => {
    const pictures = this.state.pictures;
    pictures.push(newPicture);
    this.setState({
      pictures
    });
  };

  handleUploadSuccess = filename => {
    console.log("Upload successful", filename);
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(`${this.nameInput.current.value}/${filename}`)
      .getDownloadURL()
      .then(url => {
        this.updatePictures(url);
      });
  };

  createSuite = event => {
    // 1. Stop event from submitting
    // 2.
    event.preventDefault();

    const suite = {
      name: this.nameInput.current.value,
      price: parseFloat(this.priceInput.current.value),
      status: this.statusInput.current.value,
      desc: this.descInput.current.value,
      image: this.state.pictures
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
          name="name"
          ref={this.nameInput}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          ref={this.priceInput}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusInput} placeholder="Status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea name="desc" ref={this.descInput} placeholder="Desc" />
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
        <button type="submit">Add Suite</button>
      </StyledForm>
    );
  }
}

export default AddSuiteForm;
