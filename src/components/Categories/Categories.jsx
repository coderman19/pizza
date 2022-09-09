import { React, useState } from 'react';


export default function Categories() {
 const [activeClass, setActiveClass] = useState(0);

 const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

 const onClickCategory = (index) => {
  setActiveClass(index);
 }
  return (
    <div>
      <div className="categories">
        <ul>
        {categories.map((value, i) => (
          <li 
            key={i} 
            onClick={() => onClickCategory(i)} 
            className={activeClass === i ? 'active' : ''}>
            {value}
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}
