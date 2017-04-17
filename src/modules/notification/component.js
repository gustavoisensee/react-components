import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './style.scss';

const defaultProps = {
  open: false,
  title: '',
  message: '',
  notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
  vertical: 1, // 1-top, 2-middle, 3-bottom
  horizontal: 2 // 1-left, 2-center, 3-right
};

const propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  notiType: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
  toggle: PropTypes.func.isRequired
};

const getClassByVertical = (vertical) => {
  let classNameParent;
  switch (vertical) {
    case 1:
      classNameParent = ` ${style.top}`;
      break;
    case 2:
      classNameParent = ` ${style.middle}`;
      break;
    case 3:
      classNameParent = ` ${style.bottom}`;
      break;
    default:
      classNameParent = ` ${style.top}`;
      break;
  }
  return classNameParent;
};

const getClassByHorizontal = (horizontal) => {
  let classNameParent;
  switch (horizontal) {
    case 1:
      classNameParent = ` ${style.left}`;
      break;
    case 2:
      classNameParent = ` ${style.center}`;
      break;
    case 3:
      classNameParent = ` ${style.right}`;
      break;
    default:
      classNameParent = ` ${style.center}`;
      break;
  }
  return classNameParent;
};

const getClassByNotiType = (notiType) => {
  let className;
  switch (notiType) {
    case 1:
      className = ` ${style.success}`;
      break;
    case 2:
      className = ` ${style.info}`;
      break;
    case 3:
      className = ` ${style.warning}`;
      break;
    case 4:
      className = ` ${style.fail}`;
      break;
    default:
      className = ` ${style.success}`;
      break;
  }
  return className;
};

class Notification extends Component {
  close() {
    const { notiType, vertical, horizontal, toggle } = this.props;
    toggle(false, '', '', notiType, vertical, horizontal);
  }
  render() {
    const { open, title, message, notiType, vertical, horizontal } = this.props;

    let classNameParent = style.notification__container;
    let className = style.notification;
    let classNameTitle = style.title;

    classNameParent += getClassByVertical(vertical);
    if (open && message !== '') {
      classNameParent += ` ${style.show}`;
    }

    className += getClassByVertical(vertical);
    className += getClassByHorizontal(horizontal);
    className += getClassByNotiType(notiType);

    classNameTitle += (notiType === 3 ? ` ${style.title__border__dark}` : '');

    return (
      <div className={classNameParent}>
        <div className={className}>
          <div className={classNameTitle}>
            <span className={style.title__span}>
              {title}&nbsp;
            </span>
            <button
              className={style.title__btn}
              onClick={() => this.close()}
            >x</button>
          </div>
          <div className={style.message}>
            <span>
              {message}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;

export default Notification;
