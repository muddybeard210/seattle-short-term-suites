import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../media/logo.jpg";
import { HashLink as HLink } from "react-router-hash-link";

const StyledNavWrapper = styled.div`
  height: 90px;
  border-bottom: 1px solid black;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledLogoHolder = styled.div`
  height: 100%;
  & img {
    height: 100%;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
const StyledNavLinkHolder = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Raleway, sans-serif;
  font-size: 25px;
  height: 100%;
  align-items: center;
  & a {
    transition: all 0.25s;
    color: black;
    padding: 0px 10px;
    &:hover {
      background-color: black;
      padding: 20px 10px;
      color: white;
    }
  }
  @media (max-width: 500px) {
    justify-content: center;
    width: 100%;
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
        <StyledLogoHolder>
          <img src={logo} alt="" />
        </StyledLogoHolder>
        <StyledNavLinkHolder>
          <Link to="/app/home">Home</Link>
          <HLink smooth to="/app/home#currentProperties">
            Availability
          </HLink>
          <Link to="/app/faq">FAQ</Link>
        </StyledNavLinkHolder>
      </StyledNavWrapper>
    );
  }
}

export default MainNav;
