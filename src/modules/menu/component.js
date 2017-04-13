import React, { PropTypes } from 'react';
import Item from './componentItem';
import style from './style.scss';

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.array,
  click: PropTypes.func.isRequired
};

const Menu = ({ items, click }) => (
  <div className={style.container}>
    {items.map(item =>
      (<Item
        key={item.id}
        item={item}
        click={click}
      />)
    )}
  </div>
);

Menu.defaultProps = defaultProps;
Menu.propTypes = propTypes;

export default Menu;
