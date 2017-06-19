import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from './../modules/main/container';
import style from './style.scss';

const MainLayout = () => (
  <div className={style.container}>
    <header className={style.header}>
      <h2>
        React components
      </h2>
    </header>
    <div className={style.content}>
      <Route path="*" component={MainContainer} />
    </div>
    <footer className={style.footer}>
      <h4>
        React components created by @gustavoisensee
      </h4>
    </footer>
  </div>
);

export default MainLayout;
