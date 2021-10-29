// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

/* GET book list page. wildcard */
router.get('/booklist', (req, res, next) => {
  res.render('books/index', {
    title: 'BookList',
    books: ''
   });
});

/* GET book details page. wildcard */
router.get('/details', (req, res, next) => {
  res.render('books/details', {
    title: 'Book Details',
    books: ''
   });
});

router.get('/add', (req, res, next) => {
  res.render('books/details', {
    title: 'Add a Book',
    books:''
  });
});

router.get('/edit/:id', (req, res, next) => {
  res.render('books/details', {
    title: 'Edit a Book',
    books:''
  });
});

router.get('/delete/:id', (req, res, next) => {
  res.render('books/details', {
    title: 'Delete a Book',
    books:''
  });
});

module.exports = router;
