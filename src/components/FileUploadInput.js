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
    Promise.all(
      files.map(file => {
        this.fileUploader.startUpload(file);
      })
    )
      .then(returnValue => {
        console.log("promise over!");
        console.log(returnValue);
      })
      .catch(error => {
        console.log(error);
      });
  };
  runTest = event => {
    event.preventDefault();
    const { files } = this.state;
    const promises = [];
    const downloadUrls = [];
    files.forEach(file => {
      const uploadTask = firebase
        .storage()
        .ref()
        .child("images")
        .put(file);
      promises.push(uploadTask);

      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        error => {
          console.log(error);
        },
        () => {
          firebase
            .storage()
            .ref()
            .child(`images/${file.name}`)
            .getDownloadURL()
            .then(url => {
              // this.props.updatePictures(url, file.name);
              console.log("url: ", url);
            });
        }
      );
    });

    Promise.all(promises).then(tasks => {
      console.log("all uploads complete");
      console.log(downloadUrls);
    });

    // this.startUploadManually();

    // Promise.all(
    //   // Array of "Promises"
    // .map(item => putStorageItem(item))
    // )
    // .then((url) => {
    //   console.log(`All success`)
    // })
    // .catch((error) => {
    //   console.log(`Some failed: `, error.message)
    // });
    console.log(this.newFileUploader.files);
  };
  putStorageItem = item => {
    // the return value will be a Promise
    return firebase
      .storage()
      .ref("images")
      .put(item)
      .then(snapshot => {
        console.log("One success:", item);
      })
      .catch(error => {
        console.log("One failed:", item, error.message);
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
          onChange={this.handleOnChange}
          ref={instance => {
            this.fileUploader = instance;
          }}
        />
        <input
          type="file"
          multiple
          ref={instance => {
            this.newFileUploader = instance;
          }}
          onChange={this.handleOnChange}
          name="fileupload"
        />
        <button onClick={this.runTest}>Upload pics</button>
      </div>
    );
  }
}

export default FileUploadInput;
