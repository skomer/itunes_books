var React = require('react');
var Book = require('./Book.jsx');

var BookList = React.createClass({



  render: function() {
    return (
      <div className='book-list'>
        <p>yo, book list</p>
        <Book />
      </div>
    );
  }

});

module.exports = BookList;