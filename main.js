
var express = require("express"); //eenvoudige webserver in node js
var parser = require ("body-parser"); //externe op express voor eenvoudig body uit te lezen

var dal = require('./storage.js') //de main wil de dal vragen aan storage.js

var app = express();
app.use(parser.json());

app.get('/', function(request, response){
        response.send("Hello World");
        });

var teller = 3; //teller voor ID


var Book = function(id, name){
    this.id = id;
//    this_id = id;     dit zorgt ervoor dat je uw eigen id kan kiezen.
    this.name = name;
    };
    
var books = [new Book(1, 'Harry Potter'), new Book(2, 'Harry Potter 2')];

app.get('/books', function(request, response){
        response.send(books);
        });

app.post('/books', function(request, response){
    var book = new Book(teller++, request.body.name);   //"naam" : "De prinses" teller voor ID ++
    dal.insertBooks(book, function(){                   //functie zie storage.js
        response.status(201).send();
    }) ;          
});

console.log("Hello World");
app.listen(54321);
