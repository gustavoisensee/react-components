import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './componentItem';
import style from './style.scss';

const defaultProps = {
  items: []
};

const propTypes = {
  items: PropTypes.array,
  upload: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

class File extends Component {
  fileChange(e) {
    e.preventDefault();
    const { upload } = this.props;
    const files = [...e.currentTarget.files];
    files.forEach((file) => {
      upload(file.name);
    });
  }
  render() {
    const { items, remove } = this.props;
    return (
      <div className={style.content}>
        <div className={`${style.content__input} ${style.btn}`}>
          <span>Select file</span>
          <input
            type="file"
            className={style.uploader}
            multiple
            onChange={e => this.fileChange(e)}
          />
        </div>
        <div className={style.content__items}>
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              remove={remove}
            />
          ))}
        </div>
      </div>
    );
  }
}

File.defaultProps = defaultProps;
File.propTypes = propTypes;

export default File;
