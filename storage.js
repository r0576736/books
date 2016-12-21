/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var MongoClient = require('mongodb').MongoClient; //Mongodb module inladen, het MongoClient object

var url = "mongodb://localhost:27017/booksdb"; //standaardpoort van mongo; zonder dit kan hij niet laden
                                               // /booksdb slaagt op dat dit de database is in mongo

var dal = [

    connect(url, function(error, db){ 
    if (error)                                          // als er een error is; 
    throw new Error(error);                             // met alles stoppen; anders
    console.log("Connected succesfully to server");     // Succes geconnecteerd
    db.close();  // db gesloten;
        
        
    listBooks: function
    
    
    insertBooks: function (book, callback){
        this.connect(null, function(db){
            db.collection('books').insert(book, function (err, result){
                db.close();
                callback();
            });
        });
    }
    
}),

module.exports = dal;