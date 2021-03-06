import React, { Component } from "react";
import LoginPage from "./LoginPage";
import firebase from "firebase";
import base, { firebaseApp } from "../base";
import AddSuiteForm from "./AddSuiteForm";
import EditSuiteForm from "./EditSuiteForm";
import styled from "styled-components";
import { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Raleway:300');

  h1, h2, h3, h4, .Collapsible__trigger {
    font-family: Raleway, sans-serif;
  }
  p {
    font-family: 'Open Sans', sans-serif;
  }
  input, textarea, select {
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1;
    background-color: white;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  textarea {
    min-height: 160px;
  }
  body {
    font-family: 'Open Sans',sans-serif;
  }

}
`;

const InventoryHolder = styled.div`
  max-width: 100%;
  margin: auto;
`;
const LeftSideContent = styled.div`
  overflow-y: scroll;
  width: 20%;
  padding: 10px;
  background-color: #eaeaea;
`;
const RightSideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 15px;
  height: 100%;
  overflow-y: scroll;
`;

const StyledInventoryHolder = styled(InventoryHolder)`
  display: flex;
  height: 100%;
  background: url(https://images.unsplash.com/photo-1469321461812-afeb94496b27?ixlib=rb-0.3.5…e383d6b…&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb);
  background-size: cover;
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

  addSuite = suite => {
    // 1. Take copy of existing state
    const suites = { ...this.state.suites };
    // 2. Add new suite to suites variable
    suites[`${suite.name}`] = suite;
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
  deleteSuitePhoto = (key, newImages) => {
    const suites = { ...this.state.suites };
    suites[key].image = newImages;
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
        <LeftSideContent className="doodlecake">
          <button className="btn btn-secondary" onClick={this.logout}>
            Logout
          </button>
          <AddSuiteForm addSuite={this.addSuite} />
        </LeftSideContent>
        <RightSideContent>
          <h3>Current Suites</h3>
          {Object.keys(this.state.suites).map(key => (
            <EditSuiteForm
              key={key}
              index={key}
              name={key}
              suite={this.state.suites[key]}
              updateSuite={this.updateSuite}
              deleteSuite={this.deleteSuite}
              deleteSuitePhoto={this.deleteSuitePhoto}
            />
          ))}
        </RightSideContent>
      </StyledInventoryHolder>
    );
  }
}

export default Inventory;
