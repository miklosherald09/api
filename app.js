var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

const book = require('./routes/book.route'); // Imports routes for the products

// Connect to Mongoose 

let dev_db_url = 'mongodb://localhost/op';
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/book', book);
let port = 81;

app.listen(port);
console.log('Starting');
console.log('Running at port ' + port)