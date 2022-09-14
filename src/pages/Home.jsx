import React from 'react';
import Pagination from '../components/Pagination/Pagination';
// import ReactPaginate from 'react-paginate';

import Categories from '../components/Categories/Categories';
import Sort from '../components/Sort/Sort';
import Pizza from '../components/Pizza';
import Skeleton from '../components/Pizza/Skeleton';
import { SearchContext } from '../App';




export default function Home() {
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
  name: 'популярности',
  sortProperty: 'rating',
 });


  React.useEffect(() => {
    setIsLoading(true);

    // const search = searchValue ? `&search=${searchValue}` : '';

    fetch(`https://631b0ac6fae3df4dcff2c5a6.mockapi.io/items?page=${currentPage}
    ${categoryId > 0 ? `category=${categoryId}` : ''}
    &sortBy=${sortType.sortProperty}&order=desc`)
    .then((res) =>  res.json())
    .then((json) => {
    setItems(json);
    setIsLoading(false);
  });
  window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);
 
  const pizzas = items.map((obj) => <Pizza key={obj.id} {...obj}/>);
  const skeletons = [ ...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)}/>
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
          </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {isLoading 
              ? skeletons 
                : pizzas}
          </div>  
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </>
  );
};
