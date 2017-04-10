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
    toggle(true, notiType, 'Type your message', vertical, horizontal);
  }
  render() {
    const vertical = {
      top: 1,
      center: 2,
      bottom: 3
    };
    const horizontal = {
      left: 1,
      center: 2,
      right: 3
    };
    return (
      <div className={style.content__parent}>
        <div className={style.content}>
          <h2>Top</h2>
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
        <div className={style.content}>
          <h2>Middle</h2>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.center, horizontal.left)}
          >Left</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.center, horizontal.center)}
          >Center</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.center, horizontal.right)}
          >Right</button>
        </div>
        <div className={style.content}>
          <h2>Bottom</h2>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.bottom, horizontal.left)}
          >Left</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.bottom, horizontal.center)}
          >Center</button>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification(vertical.bottom, horizontal.right)}
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
