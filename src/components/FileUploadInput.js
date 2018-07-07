import React, { Component } from "react";
import FileUploader from "react-firebase-file-uploader";

class FileUploadInput extends Component {
  render() {
    return (
      <FileUploader
        accept="image/*"
        name="avatar"
        randomizeFilename
        multiple
        storageRef={this.props.storageRef}
        onUploadStart={this.props.handleUploadStart}
        onUploadError={this.props.handleUploadError}
        onUploadSuccess={this.props.handleUploadSuccess}
        onProgress={this.props.handleProgress}
      />
    );
  }
}

export default FileUploadInput;
