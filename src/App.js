import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';

function App() {
  return <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/categoria/:idCategory' element={<ItemListContainer />} />
        <Route exact path='/detalle/:idProduct' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
}

export default App;
