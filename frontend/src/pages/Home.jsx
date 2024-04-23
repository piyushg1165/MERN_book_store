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
    <div className='w-full items-center flex flex-col'>
      <h1 className='text-5xl'>MERN Book Store</h1>
      
      <ul className="m-5 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white w-4/5">
       {books.map(book => (
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex flex-row m-5 gap-5" key={book._id}>
          <div><h1 className='font-light'>Name</h1>{book.title}</div>
          <div><h1 className='font-light'>Author</h1>{book.author}</div>
          <div><h1 className='font-light'>Publish Year</h1>{book.publishYear}</div>
          </li>
       ))}
      </ul>

    </div>
  )
}

export default Home;