import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import DeleteBook from './DeleteBook';
import UpdateBook from './UpdateBook'

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const handleCreateButton = () => {
    navigate('/books/create');
  };

 useEffect(() => {
  axios.get('http://localhost:5555/books')
  .then( (response) => {
    setBooks(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
 }, []);

  

  return (
    <div className='w-full items-center flex flex-col'>
      <h1 className='text-5xl'>MERN Book Store</h1>
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleCreateButton}>Create Book</button>      

      { (books.length < 1) ?
       <h1>No books added</h1> 
       : 
       <ul className="m-5 text-lg font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white w-auto ">
       {books.map(book => (
        <li className="w-full px-4 py-2  border-gray-200 rounded-t-lg dark:border-gray-600 flex flex-row m-5 gap-5" key={book._id}>
          <div><h1 className='font-light'>Name</h1>{book.title}</div>
          <div><h1 className='font-light'>Author</h1>{book.author}</div>
          <div><h1 className='font-light'>Publish Year</h1>{book.publishYear}</div>

          <div >
            <button className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to={`/books/update/${book._id}`}>Edit</Link>
            </button>
            <button className="m-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              <Link to={`/books/delete/${book._id}`}>Delete</Link>
            </button>
          </div>
          </li>
       ))}
      </ul>}

      

     


    </div>
  )
}

export default Home;