var React = require('react');
var BookList = require('../components/BookList.jsx');
var Book = require('../components/Book.jsx');

var BooksContainer = React.createClass({



  render: function() {
    return (
      <div className='books-container'>
        <h2>hi here are some books</h2>
        <BookList />
      </div>
    );
  }



});

module.exports = BooksContainer;
