var React = require('react');

var Book = function(props) {


  return (
    <div className='book'>
      <img src={props.image}/>
      <div id='book-details'>
        <p>Title: {props.title}</p>
        <p>Author: {props.author}</p>
        <p>Price: {props.price}</p>
      </div>
    </div>
  );



}

module.exports = Book;