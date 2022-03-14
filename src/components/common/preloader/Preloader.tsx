import preloader from '../../../assets/images/loading.gif';
import s from '../../Users/users.module.css';
import React from 'react';

export const Preloader = () => {
  return (
      <div>
          <img src={preloader} className={s.preloader}/>
      </div>
  )
}