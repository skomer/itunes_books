var React = require('react');

var Book = function(props) {


  return (
    <div className='book'>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>
      <p>Price: {props.price}</p>
      <img src={props.image}/>
    </div>
  );



}

module.exports = Book;