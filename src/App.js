import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './redux/Slices/filterSlice';

import './scss/app.scss';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
// import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import NotFoundBlock from './components/NotFoundBlock';

import './scss/app.scss';

export const SearchContext = React.createContext();

function App(props) {
 const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>  
      <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home  />} />
              <Route path='/cart' element={<Cart />} />
              <Route path="*" element={<NotFoundBlock />} />
            </Routes>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
