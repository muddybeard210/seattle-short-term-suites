import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavWrapper = styled.div`
  height: 90px;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNavLinkHolder = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  font-family: Raleway, sans-serif;
  font-size: 25px;
  height: 100%;
  align-items: center;
  & a {
    transition: all 0.25s;
    color: black;
    padding: 0px 5px;
    &:hover {
      background-color: black;
      padding: 20px 5px;
      color: white;
    }
  }
`;

class MainNav extends Component {
  runFunction = event => {
    event.preventDefault();
    console.log(this);
  };
  state = {};
  render() {
    return (
      <StyledNavWrapper>
        <StyledNavLinkHolder>
          <Link to="/app/home">Home</Link>
          <Link to="/app/about">About</Link>
          <Link to="/app/availability">Availability</Link>
          <Link to="/app/faq">FAQ</Link>
        </StyledNavLinkHolder>
      </StyledNavWrapper>
    );
  }
}

export default MainNav;
