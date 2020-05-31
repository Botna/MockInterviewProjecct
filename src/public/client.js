// GET /books
//   [
//     { Name: "Don Quixote", Author: "Miguel de Cervantes" },
//     { Name: "Frankenstein", Author: "Mary Shelley" },
//     { Name: "1984", Author: "George Orwell" },
//     { Name: "The Lord of the Rings", Author: "J. R. R. Tolkien" },
//     { Name: "Heart of Darkness", Author: "Joseph Conrad" },
//     { Name: "The Count of Monte Cristo", Author: "Alexandre Dumas" }
//   ];

// POST /books { Name: "New book", Author: "New author" }
//Returns 409 when a book with the same name already exists with a message

// GET /books/:Name
//{ Name: "Don Quixote", Author: "Miguel de Cervantes" }

(async function() {
    //Get all the books

    //Make a book

    //Get the book that was created and log it

    //Attempt to make the same book again. Print an error "Error retrieving data from server: {error message} -- Status code {status code}"
})();
