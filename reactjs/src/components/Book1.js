import React, { Component } from "react";

export default class Book extends Component {
  state = {
    books: [],
  };

  getBooks = () => {
    const url = "http://127.0.0.1:8000/api/books/";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${this.props.token}`,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        this.setState({ books: data });
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <h1>Books</h1>
        <button onClick={this.getBooks}>Load Books</button>

        {this.state.books.map((book) => {
          return (
            <div className="container">
              <span key={book.id}>{book.title}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
