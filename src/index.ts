const {Author, Book} = require("./EX1");

const author1 = new Author("Author1", "author1@example.com", "M");
const author2 = new Author("Author2", "author2@example.com", "F");

const book = new Book("Some Book", [author1, author2], 19.99, 100);

console.log(book.toString());
console.log(book.getAuthorNames());
