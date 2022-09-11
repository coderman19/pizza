import { React } from 'react';

export default function Categories({value, onChangeCategory }) {

// const [activeClass, setActiveClass] = React.useState(0);

 const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые'];

//  const onClickCategory = (index) => {
//   setActiveClass(index);
//  }
 console.log(value);
  return (
      <div className="categories">
        <ul>
        {categories.map((categoryName, i) => (
          <li 
            key={i} 
            onClick={() => onChangeCategory(i)} 
            className={value === i ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
        </ul>
      </div>
  )
}
