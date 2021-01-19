import React, { useState, useEffect } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/books/");
    const books = await response.json();
    setBooks(books);
  };

  useEffect(() => {
    console.log();
    getBooks();
  }, []);

  const updateBook = () => {};
  const destroyBook = () => {};

  return (
    <div className="books">
      <div className="header">
        <h1>Books</h1>
      </div>

      <div className="body">
        {books.map((book) => {
          return (
            <div className="book" key={book.id}>
              <span style={{ flex: 10, marginRight: "0.5rem" }}>
                {book.title}
              </span>
              <button onClick={updateBook}>Update</button>
              <button onClick={destroyBook}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Books;
