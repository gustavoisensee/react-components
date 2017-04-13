import React, { PropTypes } from 'react';
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
    {console.log(menu)}
    Test Menu
    <Menu
      items={menu}
      click={changeMenuItem}
    />
  </div>
);

MenuPresenter.defaultProps = defaultProps;
MenuPresenter.propTypes = propTypes;

export default MenuPresenter;
