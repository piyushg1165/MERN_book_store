import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const deleteBook = () => {
    axios.delete(`http://localhost:5555/books/${id}`, {id: id})
    .then((response) => {
      console.log(response);
      navigate('/');
    })
    .catch(function (error) {
       console.log(error);
     });
  };
  deleteBook();
  return (
    <div>
      <h1>Book Deleted Successfully</h1>
    </div>
  )
}

export default DeleteBook;