import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './componentItem';
import style from './style.scss';

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.array,
  upload: PropTypes.func.isRequired
};

class File extends Component {
  upload(e) {
    const { upload } = this.props;
    upload();
  }
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className={style.content}>
        <div className={style.content__input}>
          input
        </div>
        <div className={style.content__items}>
          {items.map(item => <Item key={item.id} />)}
        </div>
      </div>
    );
  }
}

File.defaultProps = defaultProps;
File.propTypes = propTypes;

export default File;
