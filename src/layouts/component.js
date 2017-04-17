import React from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {};

const propTypes = {
  children: PropTypes.element.isRequired
};

const MainLayout = ({ children }) => (
  <div className={style.container}>
    <header className={style.header}>
      <h2>
        React components
      </h2>
    </header>
    <div className={style.content}>
      {children}
    </div>
    <footer className={style.footer}>
      <h4>
        React components created by @gustavoisensee
      </h4>
    </footer>
  </div>
);

MainLayout.defaultProps = defaultProps;
MainLayout.propTypes = propTypes;

export default MainLayout;
