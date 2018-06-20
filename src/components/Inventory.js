import React, { Component } from "react";
import LoginPage from "./LoginPage";
import sampleUnits from "../sample-units";
import firebase from "firebase";
import base, { firebaseApp } from "../base";

class Inventory extends Component {
  state = {
    units: {},
    uid: null,
    owner: null
  };
  componentDidMount() {
    const storeID = "short-term-suites";

    // this.databseReference is a made up custom name.  not built in.
    this.databaseReference = base.syncState(`${storeID}/units`, {
      context: this,
      state: "units"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
    this.loadSampleUnits();
  }

  componentWillUnmount() {
    base.removeBinding(this.databaseReference);
  }
  authHandler = async authData => {
    //1.  Look up current store in the firebase database
    const store = await base.fetch("short-term-suites", { context: this });
    //2.  If no order, claim ownership
    if (!store.owner) {
      // save it as our own
      await base.post(`short-term-suites/owner`, {
        data: authData.user.uid
      });
    }
    //3.  Set the state of inventory component to reflect current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
    console.log(store);
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  logout = async () => {
    console.log("logging out");
    await firebase.auth().signOut();
    this.setState({
      uid: null
    });
  };

  loadSampleUnits = () => {
    this.setState({
      units: sampleUnits
    });
  };

  render() {
    if (!this.state.uid) {
      return <LoginPage authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return <p>Sorry Bruh, not owner</p>;
    }
    return (
      <div className="inventoryHolder">
        <button onClick={this.logout}>Logout</button>
        {Object.keys(this.state.units).map(key => (
          <li key={key}>{this.state.units[key].name}</li>
        ))}
      </div>
    );
  }
}

export default Inventory;
