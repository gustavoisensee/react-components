import React, { PropTypes } from 'react';
import style from './style.scss';

const defaultProps = {};

const propTypes = {
  children: PropTypes.element.isRequired
};

const MainLayout = ({ children }) => (
  <div className={style.content}>
    <header className={style.header}>
      <h2>
        Web components
      </h2>
    </header>
    <div className={style.content__children}>
      {children}
    </div>
    <footer className={style.footer}>
      <h4>
        Web components created by @gustavoisensee
      </h4>
    </footer>
  </div>
);

MainLayout.defaultProps = defaultProps;
MainLayout.propTypes = propTypes;

export default MainLayout;
