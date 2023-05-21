import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Notfound from './Pages/NotFound';
import Users from './Pages/Users';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
