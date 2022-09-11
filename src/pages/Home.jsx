import React from 'react';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';



export default function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
 const [categoryId, setCategoryId] = React.useState(0);
 const [sortType, setSortType] = React.useState({
  name: 'популярности',
  sortProperty: 'rating',
 });


  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://631b0ac6fae3df4dcff2c5a6.mockapi.io/items?
    ${categoryId > 0 ? `category=${categoryId}` : ''}
    &sortBy=${sortType.sortProperty}&order=desc`)
    .then((res) =>  res.json())
    .then((json) => {
    setItems(json);
    setIsLoading(false);
  });
  window.scrollTo(0, 0);
  }, [categoryId, sortType]);
 
  return (
    <div className="container">
      <div class="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
          </div>
            <h2 class="content__title">Все пиццы</h2>
            <div class="content__items">
              {
                isLoading ? [ ...new Array(6)].map((_, index) => 
                <Skeleton key={index} />) : items.map((obj) => 
                <Pizza key={obj.id} 
                {...obj}/>)
              }
          </div>  
    </div>
  );
};
