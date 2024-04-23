import React from 'react';
import axios from 'axios';

function CreateBook() {
  const postBook = () => {axios.post('http://localhost:5555/books', {
    title: 'Chara ghotala',
    author: 'lalu yadav',
    publishYear: '1999'
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
}
  return (
    <div>
      <button onClick={postBook}>click</button>
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
  )
}

export default CreateBook;