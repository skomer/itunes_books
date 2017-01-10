var React = require('react');
var ReactDOM = require('react-dom');
var BooksContainer = require('./containers/BooksContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <BooksContainer />,
    document.getElementById('app')
  );
}
