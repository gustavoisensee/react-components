import React from 'react';
import PropTypes from 'prop-types';
import Menu from './../../../menu/component';
import style from './style.scss';

const defaultProps = {
  menu: []
};

const propTypes = {
  menu: PropTypes.array,
  changeMenuItem: PropTypes.func.isRequired
};

const MenuPresenter = ({ menu, changeMenuItem }) => (
  <div className={style.container}>
    <div className={style.title}>
      <span>
        Test Menu
      </span>
    </div>
    <div className={style.menu}>
      <Menu
        items={menu}
        click={changeMenuItem}
      />
    </div>
    <div className={style.description}>
      Description
    </div>
  </div>
);

MenuPresenter.defaultProps = defaultProps;
MenuPresenter.propTypes = propTypes;

export default MenuPresenter;
