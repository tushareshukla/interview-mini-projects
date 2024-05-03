const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());

// in memory array management
let books = [];

// routes
// creating a /books route to list all the books

app.get("/books", (req, res) => {
  return res.status(200).json( {books} );
});

// creating a /books route to add a book handling post request CRUD = Create, Read, Update, Delete we are in Create Part

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "title and author is required" });
  }
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  return res
    .status(201)
    .json({ message: "book created successfully", book: newBook });
});

// creating a /books/:id route to get a single book CRUD = Create, Read, Update, Delete we are in Read Part

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json({ book });
});

// creating a /books/:id route to update a single book CRUD = Create, Read, Update, Delete we are in Update Part

app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const bookIndex = books.findIndex((book) => book.id === bookId);
  if (bookIndex !== -1) {
    books[bookIndex] = { ...books[bookIndex], title, author };
    res.status(200).json(books[bookIndex]);
  } else {
    res.status(404).json({ message: "book not found" });
  }
});


// creating a /books/:id route to delete a single book CRUD = Create, Read, Update, Delete we are in Delete Part

app.delete("/books/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter((book) => book.id !== bookId);
    res.status(200).end();

});

// Start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);

});

