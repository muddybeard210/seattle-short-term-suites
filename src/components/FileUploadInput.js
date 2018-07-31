import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";
import firebase from "firebase";

class FileUploadInput extends Component {
  state = {
    files: [],
    isUploading: false,
    progress: 0
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => {
    console.log("progress", progress);
    this.setState({ progress });
  };

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleOnChange = event => {
    console.log("event: ", event.target.files);
    const files = Object.keys(event.target.files).map(function(key) {
      return event.target.files[key];
    });
    console.log("files: ", files);
    const filesToStore = [];

    files.forEach(file => filesToStore.push(file));
    this.setState({ files: filesToStore });
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
        this.props.updatePictures(url, filename);
      });
  };
  startUploadManually = event => {
    const { files } = this.state;
    files.map(file => {
      this.fileUploader.startUpload(file);
    });
  };
  render() {
    return (
      <div>
        <FileUploader
          accept="image/*"
          name="avatar"
          randomizeFilename
          multiple
          storageRef={this.props.storageRef}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}

export default FileUploadInput;
