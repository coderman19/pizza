import './scss/app.scss';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Sort from './components/Sort/Sort';
import Pizza from './components/Pizza/Pizza';
import items from './assets/db/db.json';

function App(props) {
 
  return (
    <div className="App">        
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
            {items.map((obj) => (
              <Pizza {...obj}/>
            ))}
          </div>  
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
