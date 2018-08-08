import React, { Component } from "react";
import SuiteMainMap from "./SuiteMainMap";
import styled from "styled-components";
// @import url('https://fonts.googleapis.com/css?family=Dancing+Script|Lobster|Marck+Script|Yellowtail');
import Geocode from "react-geocode";

const StyledBannerContent = styled.div`
  background: url(${props => props.imageBackground});
  background-size: 100%;
  background-position-y: center;
  height: 50vh;
  min-height: 850px;
  display: flex;
  align-items: center;
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
  width: 100%;
  max-width: 600px;
`;

const StyledMapAndDescriptionDiv = styled.div`
  min-height: 600px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledSuiteDescContainerDiv = styled.div`
  max-width: 800px;
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
            </StyledSuiteDescContainerDiv>
          </StyledMapAndDescriptionDiv>
        </div>
      );
  }
}

export default SuiteMain;
