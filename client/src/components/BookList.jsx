var React = require('react');
var Book = require('./Book.jsx');

var BookList = React.createClass({

  render: function() {
    var books = this.props.books.map(function(book, index){
      return (
        <Book 
          key={index}
          title={book["im:name"]["label"]}
          author={book["im:artist"]["label"]}
          price={book["im:price"]["label"]}
          image={book["im:image"][2]["label"]}
      />
      );
    });
    return (
      <div className='book-list'>
        {books}
      </div>
    );
  }

});

module.exports = BookList;