import React, { PropTypes, Component } from 'react';
import style from './style.scss';

const defaultProps = {
  notification: {
    open: false,
    notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
    title: '',
    message: '',
    position: 1, // 1-top, 2-middle, 3-bottom
    horizontal: 2 // 1-left, 2-center, 3-right
  }
};

const propTypes = {
  notification: PropTypes.shape({
    open: PropTypes.bool,
    notiType: PropTypes.number,
    title: PropTypes.string,
    message: PropTypes.message,
    position: PropTypes.number,
    horizontal: PropTypes.number
  }),
  toggle: PropTypes.func.isRequired
};

const getClassByPosition = (position) => {
  let classNameParent;
  switch (position) {
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
    const { toggle } = this.props;
    toggle(false);
  }
  render() {
    const { open, title, message, notiType, position, horizontal } = this.props.notification;

    let classNameParent = style.notification__container;
    let className = style.notification;
    let classNameTitle = style.title;
    let component;
    if (open && message !== '') {
      classNameParent += getClassByPosition(position);
      classNameParent += getClassByHorizontal(horizontal);
      classNameParent += ` ${style.show}`;

      className += getClassByPosition(position);
      className += getClassByNotiType(notiType);

      classNameTitle += (notiType === 3 ? ` ${style.title__border__dark}` : '');

      component = (
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
      );
    }

    return (
      <div className={classNameParent}>
        {component}
      </div>
    );
  }
}

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;

export default Notification;
