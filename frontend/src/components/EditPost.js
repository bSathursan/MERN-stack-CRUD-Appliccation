import React, { Component } from "react";
import axios from "axios";

export default class EditPost extends Component {
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
    var i = window.location.href.split("/");
    var sid = i[5];
    // const id = this.props.match.params.id;

    const { name, description, price, author } = this.state;

    const data = {
      name: name,
      description: description,
      price: price,
      author: author,
    };
    console.log(data);

    axios.put(`http://localhost:5000/post/update/${sid}`, data).then((res) => {
      if (res.data.success) {
        alert("Book Updated Successfully");
        this.setState({
          name: "",
          description: "",
          price: "",
          author: "",
        });
      }
    });
  };

  componentDidMount() {
    var i = window.location.href.split("/");
    var sid = i[5];
    console.log(i[5], "iiii");
    const id = "6364854915944932dd6301d7";
    console.log(this.props.match, "this.props.match");
    axios
      .get(`http://localhost:5000/post/${sid}`)
      .then((res) => {
        if (res.data.success) {
          this.setState({
            name: res.data.post.name,
            description: res.data.post.description,
            price: res.data.post.price,
            author: res.data.post.author,
          });
          console.log(this.state.post);
        }
      })
      .catch((error) => {
        console.log(error.res);
      });

    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         this.setState({ loading: true });
    //         axios.get(`http://localhost:5000/post/${this.posts._id}`, { headers: { 'X-Auth-Token': token } }).then((res) =>
    //             this.setState({
    //                 name: res.posts.data.name,
    //                 description: res.data.description,
    //                 price: res.data.price,
    //                 author: res.data.author,
    //             })
    //         );
    //     }
  }

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
