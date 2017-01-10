var React = require('react');
var ReactDOM = require('react-dom');
var TopBooks = require('./containers/TopBooks.jsx');

window.onload = function(){
  ReactDOM.render(
    <TopBooks />,
    document.getElementById('app')
  );
}
