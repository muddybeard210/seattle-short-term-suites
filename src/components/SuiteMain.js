import React, { Component } from "react";
import SuiteMainMap from "./SuiteMainMap";
import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Lobster|Marck+Script|Yellowtail');
import Geocode from "react-geocode";

const StyledBannerContent = styled.div`
  background: url(${props => props.imageBackground});
  background-size: cover;
  background-position-y: center;
  height: 50vh;
  max-height: 1000px;
  display: flex;
  align-items: center;
`;

const StyledGalleryImageDiv = styled.div`
  background: url(${props => props.imageBackground});
  background-size: cover;
  background-position: center;
  flex: 1;
  justify-content: center;
  display: flex;
  height: 500px;
  transition: flex 0.2s ease-out;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.1);
  &:hover,
  &:active {
    flex: 5;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    flex: none;
    &:hover,
    &:active {
      flex: none;
    }
  }
`;
const Styledh1 = styled.h1`
  color: white;
  width: 100%;
  text-align: center;
  text-decoration: underline;
  font-family: "Lobster";
  font-weight: 300;
  background-color: #00000063;
  padding: 10px;
`;

const StyledMapHolder = styled.div`
  width: 50%;
  max-width: 600px;
  padding: 50px;

  @media (max-width: 700px) {
    width: 100%;
    padding: 10px;
  }
`;

const StyledMapAndDescriptionDiv = styled.div`
  min-height: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const StyledSuiteDescContainerDiv = styled.div`
  width: 50%;
  @media (max-width: 700px) {
    width: 100vw;
    padding: 10px;
  }
`;

const StyledImageHolderDiv = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 700px) {
    overflow-x: scroll;
  }
`;

class SuiteMain extends Component {
  state = {
    suite: {},
    imageToShow: null,
    mapCoords: {
      lat: null,
      lng: null
    }
  };
  componentWillMount() {
    const suite = this.props.suites[this.props.match.params.suiteName];
    this.setState(
      {
        suite: suite,
        imageToShow: this.props.suites[this.props.match.params.suiteName]
          .image[0].url
      },
      () => {
        this.getCoordsFromAddress(
          `${this.state.suite.addressLineOne} ${
            this.state.suite.addressLineTwo
          }`
        );
      }
    );
  }
  getCoordsFromAddress = async address => {
    Geocode.setApiKey("AIzaSyCPga5vu3m3cf0F2sbSjhMRmayE54qWO1o");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    // Get latidude & longitude from address.
    await Geocode.fromAddress(address).then(
      response => {
        console.log(response.results[0].geometry.location);
        this.setState({
          mapCoords: response.results[0].geometry.location
        });
      },
      error => {
        console.error(error);
      }
    );
  };
  // const coords = getCoordsFromAddress("14436 157th PL SE, Renton WA 98059");
  // console.log("coords", coords);

  render() {
    if (this.state.suite)
      return (
        <div>
          <StyledBannerContent imageBackground={this.state.imageToShow}>
            <Styledh1>{this.state.suite.name}</Styledh1>
          </StyledBannerContent>
          <StyledMapAndDescriptionDiv>
            <StyledMapHolder>
              {this.state.mapCoords.lat ? (
                <SuiteMainMap
                  mapCoords={this.state.mapCoords}
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPga5vu3m3cf0F2sbSjhMRmayE54qWO1o&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div style={{ height: `600px` }} />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
              ) : null}
            </StyledMapHolder>
            <StyledSuiteDescContainerDiv>
              <div
                dangerouslySetInnerHTML={{ __html: this.state.suite.desc }}
              />
              <div>
                <h3>Interested in Booking this Suite?</h3>
                <p>Contact us at: 555-555-5555</p>
                <p>Or Email us at: shorttermsuites@gmail.com</p>
              </div>
            </StyledSuiteDescContainerDiv>
          </StyledMapAndDescriptionDiv>
          <StyledImageHolderDiv>
            {this.state.suite.image.map(function(item) {
              return (
                <StyledGalleryImageDiv
                  key={item.filename}
                  imageBackground={item.url}
                  alt=""
                />
              );
            })}
          </StyledImageHolderDiv>
        </div>
      );
  }
}

export default SuiteMain;
