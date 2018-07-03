import React, { Component } from "react";

class AddSuiteForm extends Component {
  nameInput = React.createRef();
  priceInput = React.createRef();
  statusInput = React.createRef();
  descInput = React.createRef();
  imageInput = React.createRef();

  createSuite = event => {
    // 1. Stop event from submitting
    event.preventDefault();
    // 2.

    const suite = {
      name: this.nameInput.current.value,
      price: parseFloat(this.priceInput.current.value),
      status: this.statusInput.current.value,
      desc: this.descInput.current.value,
      image: this.imageInput.current.value
    };
    this.props.addSuite(suite);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form action="" className="suite-edit" onSubmit={this.createSuite}>
        <input
          name="name"
          ref={this.nameInput}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          ref={this.priceInput}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusInput} placeholder="Status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea name="desc" ref={this.descInput} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageInput}
          type="text"
          placeholder="Image"
        />
        <button type="submit">Add Suite</button>
      </form>
    );
  }
}

export default AddSuiteForm;
