import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBook() {

  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookPublishYear, setBookPublishYear] = useState();
  const navigate = useNavigate();

  const postBook = () => {axios.post('http://localhost:5555/books', {
    title: bookTitle,
    author: bookAuthor,
    publishYear: bookPublishYear
  })
  .then((response) => {
    console.log(response);
    navigate('/');
  })
  .catch((error) => {
    console.log(error);
  })

 
}
  return (
    <div className='flex flex-col p-5 m-5 '>
      <h1 className='place-self-center text-lg'>Book Title</h1>
      <input type='text' 
      name='booktitle'
      className='m-2 p-2 border-solid border-2 border-sky-500'
      value={bookTitle}
      onChange={(e) => setBookTitle(e.target.value)}/>
      <h1 className='place-self-center text-lg'>Book Author</h1>
      <input type='text' 
      name='bookauthor'
      className='m-2 p-2 border-solid border-2 border-sky-500'
      value={bookAuthor}
      onChange={(e) => setBookAuthor(e.target.value)}/>
      <h1 className='place-self-center text-lg'>Book Publish Year</h1>
      <input type='text' 
      name='bookyear'
      className='m-2 p-2 border-solid border-2 border-sky-500'
      value={bookPublishYear}
      onChange={(e) => setBookPublishYear(e.target.value)}/>
      <button className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-80 place-self-center' onClick={postBook}>Submit</button>

    </div>
  )
}

export default CreateBook;