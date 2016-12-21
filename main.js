
var express = require("express"); //eenvoudige webserver in node js
var parser = require ("body-parser"); //externe op express voor eenvoudig body uit te lezen

var app = express();
app.use(parser.json());

app.get('/', function(request, response){
        response.send("Hello World");
        });

var teller = 3;


var Book = function(id, name){
    this.id = id;
    this.name = name;
    };
    
var books = [new Book(1, 'Harry Potter'), new Book(2, 'Harry Potter 2')];

app.get('/books', function(request, response){
        response.send(books);
        });

app.post('/', function(request, response){
    var book = new Book(teller++, request.body.name); //"naam" : "De prinses"
    books.push(book);
    
});

console.log("Hello World");
app.listen(54321);
