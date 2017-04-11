import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import Notification from './../notification/container';

const defaultProps = {};

const propTypes = {
  toggle: PropTypes.func.isRequired
};

class Main extends Component {
  toggleNotification(vertical, horizontal) {
    const { toggle } = this.props;
    const notiType = 1; // 1-success
    toggle(true, notiType, 'Type your title', 'Type your message', vertical, horizontal);
  }
  render() {
    const vertical = {
      top: 1,
      middle: 2,
      bottom: 3
    };
    const horizontal = {
      left: 1,
      center: 2,
      right: 3
    };
    return (
      <div className={style.content__parent}>
        <div className={style.content__filter}>
          <div className={style.filter__first} htmlFor="top">
            <input id="top" type="radio" name="positionNoti" defaultValue="1" checked />
            <label htmlFor="top">Top</label>
          </div>
          <div className={style.filter} htmlFor="middle">
            <input id="middle" type="radio" name="positionNoti" defaultValue="2" />
            <label htmlFor="middle">Middle</label>
          </div>
          <div className={style.filter__last} htmlFor="bottom">
            <input id="bottom" type="radio" name="positionNoti" defaultValue="3" />
            <label htmlFor="bottom">Top</label>
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.filter__first} htmlFor="success">
            <input id="success" type="radio" name="typeNoti" defaultValue="1" checked />
            <label htmlFor="success">Success</label>
          </div>
          <div className={style.filter} htmlFor="info">
            <input id="info" type="radio" name="typeNoti" defaultValue="2" />
            <label htmlFor="info">Info</label>
          </div>
          <div className={style.filter} htmlFor="warning">
            <input id="warning" type="radio" name="typeNoti" defaultValue="3" />
            <label htmlFor="warning">Warning</label>
          </div>
          <div className={style.filter__last} htmlFor="error">
            <input id="error" type="radio" name="typeNoti" defaultValue="4" />
            <label htmlFor="error">Error</label>
          </div>
        </div>
        <div className={style.content}>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.top, horizontal.left)}
          >Left</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.top, horizontal.center)}
          >Center</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.top, horizontal.right)}
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
