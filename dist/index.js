"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EX1_1 = require("./EX1");
const author1 = new EX1_1.Author("Author1", "author1@example.com", "M");
const author2 = new EX1_1.Author("Author2", "author2@example.com", "F");
const book = new EX1_1.Book("Some Book", [author1, author2], 19.99, 100);
console.log(book.toString());
console.log(book.getAuthorNames());
