var React = require('react');
var BookList = require('../components/BookList.jsx');
var Book = require('../components/Book.jsx');

var BooksContainer = React.createClass({

  getInitialState: function() {
    return { books: [] };
  },
  componentDidMount: function() {
    var url = 'https://itunes.apple.com/gb/rss/toppaidebooks/limit=20/genre=9019/json';
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText)['feed']['entry'];
      console.log("data", data);
      this.setState({books: data});
    }.bind(this);
    request.send();
  },
  render: function() {
    console.log("this.state.books", this.state.books);
    return (
      <div className='books-container'>
        <h1>iTunes Top 20 Paid Books UK Science and Nature</h1>
        <BookList 
          books={this.state.books}
        />
      </div>
    );
  }

});

module.exports = BooksContainer;
