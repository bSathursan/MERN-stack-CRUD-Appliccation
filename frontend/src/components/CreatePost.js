import React, { Component } from "react";
import axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      price: "",
      author: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, description, price, author } = this.state;

    const data = {
      name: name,
      description: description,
      price: price,
      author: author,
    };
    console.log(data);

    axios.post("http://localhost:8000/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          name: "",
          description: "",
          price: "",
          author: "",
        });
      }
    });
    
  };
  

  render() {
    return (
      <div className="col-md mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add Your Book</h1>
        <form className="needs-validation" noValidate>
          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              placeholder="Enter Price"
              value={this.state.price}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              placeholder="Enter Author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ margintop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp;Submit
          </button>
        </form>
      </div>
    );
  }
}
