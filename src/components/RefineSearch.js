import React, { Component } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const StyledForm = styled.form`
  width: 50%;
  max-width: 820px;
  padding: 10px;
  margin: auto;
`;

class RefineSearch extends Component {
  state = {
    filteredResults: {
      bedrooms: 0,
      bathrooms: 0,
      parking: 0
    }
  };

  bedroomsInput = React.createRef();
  bathroomsInput = React.createRef();
  parkingInput = React.createRef();
  componentWillUnmount() {
    window.localStorage.setItem(
      "filteredResults",
      JSON.stringify(this.state.filteredResults)
    );
  }
  componentDidMount() {
    const filteredResults = window.localStorage.getItem("filteredResults");
    if (filteredResults) {
      this.setState(
        {
          filteredResults: JSON.parse(filteredResults)
        },
        this.handleChange
      );
    }
  }
  handleChange = () => {
    const filteredResults = {
      bedrooms: this.bedroomsInput.current.value,
      bathrooms: this.bathroomsInput.current.value,
      parking: this.parkingInput.current.value
    };
    this.props.handleRefine(filteredResults);
    this.setState({
      filteredResults: filteredResults
    });
  };

  render() {
    return (
      <StyledForm action="">
        <h4>Filter Your Results</h4>
        <div>
          <label htmlFor="bedrooms">
            {" "}
            <i className="fas fa-bed" />{" "}
          </label>
          <StyledSelect
            onChange={this.handleChange}
            name="bedrooms"
            innerRef={this.bedroomsInput}
            value={this.state.filteredResults.bedrooms}
          >
            <option value="0">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </StyledSelect>
        </div>
        <div>
          <label htmlFor="bathrooms">
            {" "}
            <i className="fas fa-bath" />{" "}
          </label>
          <StyledSelect
            name="bathrooms"
            onChange={this.handleChange}
            innerRef={this.bathroomsInput}
            value={this.state.filteredResults.bathrooms}
          >
            <option value="0">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </StyledSelect>
        </div>
        <div>
          <label htmlFor="parking">
            {" "}
            <i className="fas fa-car" />{" "}
          </label>
          <StyledSelect
            name="parking"
            onChange={this.handleChange}
            innerRef={this.parkingInput}
            value={this.state.filteredResults.parking}
          >
            <option value="0">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </StyledSelect>
        </div>
      </StyledForm>
    );
  }
}

export default RefineSearch;
