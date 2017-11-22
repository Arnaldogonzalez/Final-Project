const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre')
Book = require('./models/book')

// Connect to mongoose
mongoose.connect('mongodb://localhost/restaurant');
const db = mongoose.connection;

app.get('/', function(req, res) {
  res.send('./');
});

app.get('/api/genres', function(){
  Genre.getGenres(function(err, genres){
    if(err){
      throw err;
    }
    res.json(genres);
  });
});

app.post('/api/genres', function(){
  var genre = req.body;
  Genre.addGenre(genre, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.put('/api/genres/:_id', function(){
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.delete('/api/genres/:_id', function(){
  var id = req.params._id;
  Genre.removeGenre(id, function(err, genre){
    if(err){
      throw err;
    }
    res.json(genre);
  });
});

app.get('/api/books', function(){
  Book.getBooks(function(err, prods){
    if(err){
      throw err;
    }
    res.json(books);
  });
});

app.get('/api/books/:_id', function(){
  Book.getBookById(req.params._id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.post('/api/books', function(){
  var book = req.body;
  Book.addBook(book, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.put('/api/books/:_id', function(){
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id, book, {}, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.delete('/api/books/:_id', function(){
  var id = req.params._id;
  Book.removeBook(id, function(err, book){
    if(err){
      throw err;
    }
    res.json(book);
  });
});

app.listen(3000);
console.log('Running on port 3000...');
