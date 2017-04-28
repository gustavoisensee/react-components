import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {
  item: [],
  remove: () => {}
};

const propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string
  }),
  remove: PropTypes.func
};

class FileItem extends Component {
  remove(e) {
    e.preventDefault();
    const { remove, item } = this.props;
    remove(item.id);
  }
  render() {
    const { item } = this.props;
    return (
      <div className={style.content__item}>
        <div className={style.content__item__title}>
          <span>
            {item.text}
          </span>
        </div>
        <div className={style.content__item__buttons}>
          <button
            className={style['btn-remove']}
            onClick={e => this.remove(e)}
          />
        </div>
      </div>
    );
  }
}

FileItem.defaultProps = defaultProps;
FileItem.propTypes = propTypes;

export default FileItem;
