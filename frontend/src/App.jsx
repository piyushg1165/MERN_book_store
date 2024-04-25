import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';
import CreateBook from './pages/CreateBook';

function App() {
  return (
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/books/create' element= {<CreateBook/>}/>
      <Route path='/books/update/:id' element= {<UpdateBook/>}/>
      <Route path='/books/delete/:id' element= {<DeleteBook/>}/>
    </Routes>
  )
}

export default App;