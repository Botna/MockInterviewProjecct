var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParse = require('body-parser');

app.use(bodyParse.json());
app.use(express.static('src/public'));

let book = [{
    Name: "Don Quixote",
    Author: "Miguel de Cervantes"
},
{
    Name: "Frankenstein",
    Author: "Mary Shelley"
},
{
    Name: "1984",
    Author: "George Orwell"
},
{
    Name: "The Lord of the Rings",
    Author: "J. R. R. Tolkien"
},
{
    Name: "Heart of Darkness",
    Author: "Joseph Conrad"
},
{
    Name: "The Count of Monte Cristo",
    Author: "Alexandre Dumas"
}];

app.listen(port);

const validateBook = unvalidatedBook => {
    if(unvalidatedBook === undefined || unvalidatedBook.Name === undefined || unvalidatedBook.Author == undefined) {
        return false;
    }
    return false;
}

const makeBook = (req, res) => {
    let unvalidatedBook = req.body;
    if (validateBook(unvalidatedBook)) {
        res.status(400);
        res.send('Missing Required Field Name or Author');
    }
    if (book.find( b => b.Name === unvalidatedBook.Name)) {
        res.status(409);
        res.send(`Book with name ${unvalidatedBook.Name} already exists`)
    } else {
        let validatedBook = { 
            Name : unvalidatedBook.Name,
            Author : unvalidatedBook.Author
        }
        book.push(validatedBook);
        res.status(201);
        res.send(validatedBook);
    }
}

const findBook = (req, res) => {
    let name = req.params.name;
    const b = book.find(b => b.Name === name);
    if (b === undefined) {
        res.status(404);
        res.send(`Book with name ${name} could not be found`)
    }
    res.json(b);
}

const deleteBook = (req, res) => {
    let name = req.params.name;
    const index = book.findIndex(b => b.Name === name);
    if (index > -1) {
      book.splice(index, 1);
      res.status(204);
      res.send('');
    } else {
        res.status(404);
        res.send(`Book with name ${name} could not be found`)
    }
}

const reverse = function(req, res) {
    res.json([...req.params.input].reverse().join(''));
}

const foobar = function(req, res) {
    let responseBody;
    if(req.params.input === 'foo')
    {
        responseBody = 'bar';
    }else if (req.params.input === 'bar') 
    {
        responseBody = 'foo';
    }else {
        responseBody = 'foobar'
    }
    res.json(responseBody)
}

app.route('/reverse/:input')
    .post(reverse);

app.route('/foobar')
    .get((req, res) => res.json('foobar'));

app.route('/foobar/:input')
    .post(foobar);

app.route('/books')
    .post(makeBook)
    .get((req, res) => res.json(book));

app.route('/books/:name')
    .get(findBook)
    .delete(deleteBook);


console.log('todo list RESTful API server started on: ' + port);
