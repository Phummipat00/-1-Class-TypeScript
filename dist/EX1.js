"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Author = void 0;
class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getGender() {
        return this.gender;
    }
}
exports.Author = Author;
class Book {
    constructor(name, authors, price, qty = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `${this.name} by ${this.getAuthorNames()} - $${this.price} - Quantity: ${this.qty}`;
    }
    getAuthorNames() {
        return this.authors.map(author => author.getName()).join(", ");
    }
}
exports.Book = Book;
