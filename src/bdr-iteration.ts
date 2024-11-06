// Behavioural Design Pattern of Iterator
/*
Definition

The Iterator Pattern provides a way to access elements of a collection sequentially without exposing the underlying representation of the collection. This pattern is useful for traversing complex data structures like lists, trees, or arrays.

*/


class Book {
    constructor(public title: string, public author: string) {}
}

// Define Book Iterator
class BookIterator {
    private current: number = 0;
    private collection: BookCollection;

    constructor(collection: BookCollection) {
        this.collection = collection;
    }

    hasNext(): boolean {
        return this.current < this.collection.getBooks().length;
    }

    next(): Book {
        return this.collection.getBooks()[this.current++];
    }
}

// Define Book Collection
// BookCollection.ts
class BookCollection {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    getIterator(): BookIterator {
        return new BookIterator(this);
    }

    getBooks(): Book[] {
        return this.books;
    }
}

// Client code
function main() {
    const bookCollection = new BookCollection();
    bookCollection.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
    bookCollection.addBook(new Book("1984", "George Orwell"));
    bookCollection.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));

    const iterator = bookCollection.getIterator();

    while (iterator.hasNext()) {
        const book = iterator.next();
        console.log(`Title: ${book.title}, Author: ${book.author}`);
    }
}

main();
