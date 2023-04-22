import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { NavBar } from './NavBar/NavBar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
import { Checkout } from './Checkout/Checkout';

function App() {
  return (
    <>
    <main className='app'>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/product/:product' element={<ItemDetailContainer />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element={ <h1>404 NOT FOUND</h1> } />
        </Routes>
      </BrowserRouter>
    </main>
    </>
  );
}

export default App;
