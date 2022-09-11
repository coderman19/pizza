import React from 'react';
import styles from './NotfoundBlock.module.scss';
import emoji from '../../assets/img/emoji.svg';

export default function NotFoundBlock() {
  return (
      <div className={styles.root}>
          <span>
          <img 
            width={60} 
            src={emoji} 
            alt="emoji"/>
          </span>
          <br />
          <h1>
            Ничего не найдено!
          </h1>
        <p>Запрашиваемая страница недоступна.</p>
      </div>
  )
}
