import React, { PropTypes } from 'react';
import style from './style.scss';

const defaultProps = {
  notification: {
    open: false,
    notiType: 1, // 1-success, 2-warning, 3-error/fail,
    message: '',
    vertical: 1, // 1-top, 2-middle, 3-bottom
    horizontal: 2 // 1-left, 2-center, 3-right
  }
};

const propTypes = {
  notification: PropTypes.shape({
    open: PropTypes.bool,
    notiType: PropTypes.number,
    message: PropTypes.message,
    vertical: PropTypes.number,
    horizontal: PropTypes.number
  })
};

const Notification = ({ notification }) => {
  const { open, notiType, message, vertical, horizontal } = notification;

  let classNameParent = style.notification__container;
  let className = style.notification;

  if (open && message !== '') {
    switch (vertical) {
      case 1:
        classNameParent += ` ${style.top}`;
        break;
      case 2:
        classNameParent += ` ${style.middle}`;
        break;
      case 3:
        classNameParent += ` ${style.bottom}`;
        break;
      default:
        classNameParent += ` ${style.top}`;
        break;
    }

    switch (horizontal) {
      case 1:
        classNameParent += ` ${style.left}`;
        break;
      case 2:
        classNameParent += ` ${style.center}`;
        break;
      case 3:
        classNameParent += ` ${style.right}`;
        break;
      default:
        classNameParent += ` ${style.center}`;
        break;
    }

    switch (notiType) {
      case 1:
        className += ` ${style.success}`;
        break;
      case 2:
        className += ` ${style.warning}`;
        break;
      case 3:
        className += ` ${style.fail}`;
        break;
      default:
        className += ` ${style.success}`;
        break;
    }
  }

  return (
    <div className={classNameParent}>
      <div className={className}>
        <span>
          {message}
        </span>
      </div>
    </div>
  );
};

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;

export default Notification;
