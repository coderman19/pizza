import React from 'react';
import { SearchContext } from '../../App';
import styles from './Search.module.scss';

import searchIcon from '../../assets/img/search.svg';
import xIcon from '../../assets/img/x_icon.svg';

export default function Search() {

  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.root}>
      <img className={styles.search} src={searchIcon} alt="" />
      {/* контролируемый инпут */}
      <input 
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)} 
        className={styles.input} 
        placeholder='поиск пиццы...' />
        {searchValue && (
          <img onClick={() => setSearchValue('')} className={styles.xicon} src={xIcon} alt="" />
        )}  
    </div>
  )
}
