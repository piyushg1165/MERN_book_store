import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteBook() {

  const navigate = useNavigate();
  
  const { id } = useParams();
  
  const delayNavigation = () => {
    navigate('/');
  }

 

  const deleteBook = () => {
    axios.delete(`http://localhost:5555/books/${id}`, {id: id})
    .then((response) => {
      console.log(response.data.message);
      setTimeout(delayNavigation, 1000);
      
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