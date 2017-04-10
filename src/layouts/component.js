import React, { PropTypes } from 'react';
import style from './style.scss';

const defaultProps = {};

const propTypes = {
  children: PropTypes.element.isRequired
};

const MainLayout = ({ children }) => (
  <div className={style.content}>
    <header className={style.header}>
      Web components
    </header>
    <div className={style.content__children}>
      {children}
    </div>
    <footer className={style.footer}>
      Footer
    </footer>
  </div>
);

MainLayout.defaultProps = defaultProps;
MainLayout.propTypes = propTypes;

export default MainLayout;
