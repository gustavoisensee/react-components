import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import Notification from './../notification/container';

const defaultProps = {
  notification: {
    position: 1,
    notiType: 1
  }
};

const propTypes = {
  notification: PropTypes.shape({
    position: PropTypes.number,
    notiType: PropTypes.number
  }),
  toggle: PropTypes.func.isRequired,
  changePositionNotification: PropTypes.func.isRequired,
  changeTypeNotification: PropTypes.func.isRequired
};

class Main extends Component {
  toggleNotification(horizontal) {
    const { toggle, notification } = this.props;
    toggle(true, 'Type your title', 'Type your message',
      notification.notiType, notification.position, horizontal);
  }
  changePositionNotification(e) {
    const { changePositionNotification } = this.props;
    const position = parseInt(e.currentTarget.value, 10);
    changePositionNotification(position);
  }
  changeTypeNotification(e) {
    const { changeTypeNotification } = this.props;
    const typeNoti = parseInt(e.currentTarget.value, 10);
    changeTypeNotification(typeNoti);
  }
  render() {
    const { notification } = this.props;
    const { position, notiType } = notification;
    const horizontal = {
      left: 1,
      center: 2,
      right: 3
    };
    return (
      <div className={style.content__parent}>
        <div className={style.content__filter}>
          <div className={style.filter__first} htmlFor="top">
            <input
              id="top"
              type="radio"
              name="positionNoti"
              defaultValue="1"
              checked={position === 1}
              onChange={e => this.changePositionNotification(e)}
            />
            <label htmlFor="top">Top</label>
          </div>
          <div className={style.filter} htmlFor="middle">
            <input
              id="middle"
              type="radio"
              name="positionNoti"
              defaultValue="2"
              checked={position === 2}
              onChange={e => this.changePositionNotification(e)}
            />
            <label htmlFor="middle">Middle</label>
          </div>
          <div className={style.filter__last} htmlFor="bottom">
            <input
              id="bottom"
              type="radio"
              name="positionNoti"
              defaultValue="3"
              checked={position === 3}
              onChange={e => this.changePositionNotification(e)}
            />
            <label htmlFor="bottom">Bottom</label>
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.filter__first} htmlFor="success">
            <input
              id="success"
              type="radio"
              name="typeNoti"
              value="1"
              checked={notiType === 1}
              onChange={e => this.changeTypeNotification(e)}
            />
            <label htmlFor="success">Success</label>
          </div>
          <div className={style.filter} htmlFor="info">
            <input
              id="info"
              type="radio"
              name="typeNoti"
              value="2"
              checked={notiType === 2}
              onChange={e => this.changeTypeNotification(e)}
            />
            <label htmlFor="info">Info</label>
          </div>
          <div className={style.filter} htmlFor="warning">
            <input
              id="warning"
              type="radio"
              name="typeNoti"
              value="3"
              checked={notiType === 3}
              onChange={e => this.changeTypeNotification(e)}
            />
            <label htmlFor="warning">Warning</label>
          </div>
          <div className={style.filter__last} htmlFor="error">
            <input
              id="error"
              type="radio"
              name="typeNoti"
              value="4"
              checked={notiType === 4}
              onChange={e => this.changeTypeNotification(e)}
            />
            <label htmlFor="error">Error</label>
          </div>
        </div>
        <div className={style.content}>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(horizontal.left)}
          >Left</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(horizontal.center)}
          >Center</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(horizontal.right)}
          >Right</button>
        </div>

        <Notification />
      </div>
    );
  }
}

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;
