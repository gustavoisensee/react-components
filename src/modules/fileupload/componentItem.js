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
    const { remove } = this.props;
    remove();
  }
  render() {
    const { item } = this.props;
    return (
      <div className={style.content}>
        {item.text}
      </div>
    );
  }
}

FileItem.defaultProps = defaultProps;
FileItem.propTypes = propTypes;

export default FileItem;
