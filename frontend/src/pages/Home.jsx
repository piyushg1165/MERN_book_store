import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [books, setBooks] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:5555/books')
  .then( (response) => {
    setBooks(response.data.data);
    console.log(books);
  })
  .catch(function (error) {
    console.log(error);
  });
 }, []);
  

  return (
    <div>
      <h1>Welcome to React!</h1>
      
      <ul>
       {books.map(book => (
        <li key={book._id}>{book.title} by {book.author} published in {book.publishYear}</li>
       ))}
      </ul>
    </div>
  )
}

export default Home;