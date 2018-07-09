import React, { Component } from "react";
import LoginPage from "./LoginPage";
import sampleUnits from "../sample-suites";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import AddSuiteForm from "./AddSuiteForm";
import EditSuiteForm from "./EditSuiteForm";
import styled from "styled-components";

const InventoryHolder = styled.div`
  max-width: 100%;
  margin: auto;
`;
const LeftSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 10px;
  background-color: #37353d;
`;
const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  padding: 15px;
  background-color: #3e3b45;
`;

const StyledInventoryHolder = styled(InventoryHolder)`
  display: flex;
  height: 100%;
`;

class Inventory extends Component {
  state = {
    suites: {},
    uid: null,
    owner: null
  };
  componentDidMount() {
    const storeID = "short-term-suites";

    // this.databseReference is a made up custom name.  not built in.
    this.databaseReference = base.syncState(`${storeID}/suites`, {
      context: this,
      state: "suites"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
    // this.loadSampleUnits();
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
      suites: sampleUnits
    });
  };

  addSuite = suite => {
    // 1. Take copy of existing state
    const suites = { ...this.state.suites };
    // 2. Add new suite to suites variable
    suites[`suite${Date.now()}`] = suite;
    // 3. Set the new suites object to state;
    this.setState({
      suites: suites
    });
  };

  updateSuite = (key, updatedSuite) => {
    const suites = { ...this.state.suites };
    suites[key] = updatedSuite;

    this.setState({
      suites: suites
    });
  };

  deleteSuite = key => {
    const suites = { ...this.state.suites };
    suites[key] = null;
    this.setState({
      suites: suites
    });
  };

  render() {
    if (!this.state.uid) {
      return <LoginPage authenticate={this.authenticate} />;
    }
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry Bruh, not owner</p>
          <button onClick={this.logout}>Logout</button>
        </div>
      );
    }
    return (
      <StyledInventoryHolder>
        <LeftSideContent>
          <button onClick={this.logout}>Logout</button>
          <AddSuiteForm addSuite={this.addSuite} />
        </LeftSideContent>
        <RightSideContent>
          {Object.keys(this.state.suites).map(key => (
            <EditSuiteForm
              key={key}
              index={key}
              suite={this.state.suites[key]}
              updateSuite={this.updateSuite}
              deleteSuite={this.deleteSuite}
            />
          ))}
        </RightSideContent>
      </StyledInventoryHolder>
    );
  }
}

export default Inventory;
