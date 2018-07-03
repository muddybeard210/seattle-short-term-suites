import React, { Component } from "react";
class EditFishForm extends Component {
  state = {};
  handleChange = event => {
    const updateSuite = {
      ...this.props.suite,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateSuite(this.props.index, updateSuite);
  };
  handleDelete = event => {
    this.props.deleteSuite(this.props.index);
  };
  render() {
    return (
      <div className="suite-edit">
        <input
          name="name"
          value={this.props.suite.name}
          onChange={this.handleChange}
          type="text"
          placeholder="Name"
        />
        <input
          name="price"
          value={this.props.suite.price}
          onChange={this.handleChange}
          type="text"
          placeholder="Price"
        />
        <select
          name="status"
          value={this.props.suite.status}
          placeholder="Status"
          onChange={this.handleChange}
        >
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea
          name="desc"
          value={this.props.suite.desc}
          placeholder="Desc"
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.suite.image}
          onChange={this.handleChange}
          type="text"
          placeholder="Image"
        />
        <button onClick={this.handleDelete} />
      </div>
    );
  }
}

export default EditFishForm;
