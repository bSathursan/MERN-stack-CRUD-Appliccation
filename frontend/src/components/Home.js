import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        if (res.data.success) {
          this.setState({
            posts: res.data.existingPosts,
          });
          console.log(this.state.posts);
        }
      })
      .catch((error) => {
        console.log(error.res);
      });
  }

  onDelete = (id) => {
    axios.delete(`http://localhost:8000/post/delete/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrivePosts();
    })
  }

  render() {
    return (
      <div className="container">
        <p>All Books</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/${posts._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {posts.name}
                  </a>
                </td>
                <td>{posts.description}</td>
                <td>{posts.price}</td>
                <td>{posts.author}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Add Books</a></button>
      </div>
    );
  }
}
