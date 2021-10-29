// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let Book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  Book.find( (err, bookList) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Book List',
        BookList: bookList
      });
    }
  });

});



//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {
    res.render('books/details', {title: 'Add a book'})
      

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {
  let newBook = Book({
    "title": req.body.title,
    "description": req.body.description,
    "price": req.body.price,
    "author": req.body.author,
    "genre": req.body.genre
});
book.create(newBook, (err, book) =>{
  if(err)
  {
     console.log(err);
     res.end(err);
  }
  else
  {
     res.redirect('/index');
  }
});
});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {
  let id = req.params.id;

  book.findById(id, (err, bookToEdit) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.render('/index', {title: 'Edit Book', book: bookToEdit})
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post('/edit', (req, res, next) => {
  let id = req.params.id
  
  let updatedBook = book({
    "title": req.body.title,
    "description": req.body.description,
    "price": req.body.price,
    "author": req.body.author,
    "genre": req.body.genre
  });

  book.updateOne({_id: id}, updatedBook, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/index');
    }
  });
});

// GET - process the delete by user id
router.get('/delete', (req, res, next) => {
  let id = req.params.id

  book,remove({_id: id}, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/index');
    }
  });
});

module.exports = router;
