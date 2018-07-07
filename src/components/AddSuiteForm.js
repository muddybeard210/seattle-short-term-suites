import React, { Component } from "react";
import FileUploadInput from "./FileUploadInput";
import firebase from "firebase";

class AddSuiteForm extends Component {
  state = {
    isUploading: false,
    progress: 0,
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
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.updatePictures(url);
      });
  };

  createSuite = event => {
    // 1. Stop event from submitting
    event.preventDefault();
    // 2.

    const suite = {
      name: this.nameInput.current.value,
      price: parseFloat(this.priceInput.current.value),
      status: this.statusInput.current.value,
      desc: this.descInput.current.value,
      image: this.imageInput.current.value
    };
    this.props.addSuite(suite);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form action="" className="suite-edit" onSubmit={this.createSuite}>
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
        />
        <button type="submit">Add Suite</button>
      </form>
    );
  }
}

export default AddSuiteForm;
