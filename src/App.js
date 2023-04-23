
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import { CartPovider } from './Component/Context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartPovider>
          <NavBar />
          <div className="container-fluid containerCard">
            <div className='row'>
              <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='*' element={<h1>404 NOT FOUND</h1>} />


              </Routes>
            </div>
          </div>
        </CartPovider>
      </BrowserRouter>
    </div>
  );
}

export default App;
