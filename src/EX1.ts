import { publicDecrypt } from "crypto";

export class Author {
    private name: string;
    private email: string;
    private gender: string;

    constructor(name: string, email: string, gender: string) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getGender(): string {
        return this.gender;
    }
}

export class Book {
    private name: string;
    private authors: Author[];
    private price: number;
    private qty: number;

    constructor(name: string, authors: Author[], price: number, qty: number = 0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }

    getName(): string {
        return this.name;
    }

    getAuthors(): Author[] {
        return this.authors;
    }

    getPrice(): number {
        return this.price;
    }

    setPrice(price: number): void {
        this.price = price;
    }

    getQty(): number {
        return this.qty;
    }

    setQty(qty: number): void {
        this.qty = qty;
    }

 toString(): string {
        let detail = `Book[name="${this.name}", authors={`;
        for (let i = 0; i < this.authors.length; i++) {
            detail += this.authors[i];
            if (i < this.authors.length - 1) {
                detail += ", ";
            }
        }
        detail += `}, price=${this.price}, qty=${this.qty}]`;
        return detail;
    }

    // getAuthorNames method
    getAuthorNames(): string {
        let authorNames = '';
        for (let i = 0; i < this.authors.length; i++) {
            authorNames += this.authors[i];
            if (i < this.authors.length - 1) {
                authorNames += ", ";
            }
        }
        return authorNames;
    }
}
