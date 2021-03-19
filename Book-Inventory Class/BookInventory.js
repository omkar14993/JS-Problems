// Develop an inventory application for a Bookstore
// create class that stores information about the bookstore, 1. Title, 2. Author, 3. ISBN, 4. Number of copies
// getAvailability(). if 0 then "out of stock", if < 10 then "low inventory" else return number of books available
// sell(), default = 1
// restock(), default = 5

class BookStore {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getAvailability() {
        if (this.copies === 0) return "Out of Stock";
        else if (this.copies < 10) return "Low Stock";
        else return this.copies;
    }

    sell(sellBooks = 1) {
        if (sellBooks > this.copies)
            return "Cannot sell books due to low inventory";
        else {
            this.copies = this.copies - sellBooks;
            return `${sellBooks} sold, number of available copies are ${this.copies}`;
        }
    }

    restock(addCopies = 5) {
        console.log(this);
        this.copies = this.copies + addCopies;
        return `Restocked ${addCopies} copies, total number of available copies are ${
        this.copies
      }`;
    }
}

let store = new BookStore("The BOOK", "John", "123AB0999", 12);
store.getAvailability(); // 12
store.sell(9); // 9 sold, number of available copies are 3
store.getAvailability(); // Low Stock