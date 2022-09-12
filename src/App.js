import React from 'react';

import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';

import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import NotFoundBlock from './components/NotFoundBlock';


function App(props) {
 const [searchValue, setSearchValue] = React.useState('');

 console.log(searchValue, 'input changed');
  return (
       
    <div class="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />

      <div class="content">
        <div class="container">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}

export default App;
