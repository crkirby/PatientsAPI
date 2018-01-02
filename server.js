const express = require('express');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);

    // Pass to next layer of middleware
    next();
});

const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/patient_data', (req, res) => {
  console.log(req.body)
	
});

app.listen(port, () => console.log(`Listening on port ${port}`));


/*
var express = require('express');
var app = express();

var mongoose = require('mongoose');

app.use(bodyParser.json()); // middleware body parser

Genre = require('./models/genre'); //accessing genre
Book = require('./models/book'); //accessing books

//Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true });

var db = mongoose.connection;

//Routes and handling requests

app.get('/', function(req,res){
	res.send("Hello Cameron welcome to the bookstore!"); //send to browser
});

app.get('/api/genres', function(req,res){
	Genre.getGenres(function (err, genres) {
		if(err){
			throw err;
		}
		res.json(genres); //server response in json -> genres
	});
});

app.post('/api/genres', function(req,res){
	var genre = req.body;
	Genre.addGenre(genre, function (err, genre) {
		if(err){
			throw err;
		}
		res.json(genre); //server response in json -> genres
	});
});

app.put('/api/genres/:_id', function(req,res){
	var id = req.params._id;
	var genre = req.body;

	Genre.updateGenre(id, genre, function (err, genre) {
		if(err){
			throw err;
		}
		res.json(genre); //server response in json -> genres
	});
});

app.delete('/api/genres/:_id', function(req,res){
	var id = req.params._id;
	Genre.deleteGenre(id, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});


app.get('/api/books', function(req,res){
	Book.getBooks(function (err, books) {
		if(err){
			throw err;
		}
		res.json(books); //server response in json -> books
	});
});

app.get('/api/books/:_id', function(req,res){
	Book.getBook(req.params._id, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});

app.post('/api/books', function(req,res){
	var book = req.body;
	Book.addBook(book, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});

app.post('/api/books/:_id', function(req,res){
	var id = req.params._id;
	var book = req.body;
	Book.updateBook(id, book, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});

app.delete('/api/books/:_id', function(req,res){
	var id = req.params._id;
	Book.deleteBook(id, function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});


app.listen(3000);
console.log("Running on 3000");*/