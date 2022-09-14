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
//  const count = useSelector((state) => state.counter.count);
//  const sum = useSelector((state) => state.counter.sum);
//  const dispatch = useDispatch();



 console.log(searchValue, 'input changed');
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {/* <div className={StyleSheet.calculator}>
      <>
      <span>{count}</span>
      <p>{sum}</p>
      </>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
       
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Убавить
        </button>
      </div> */}
   
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
