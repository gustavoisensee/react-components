import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import Notification from './../notification/component';

const defaultProps = {
  notification: {
    open: false,
    title: '',
    message: '',
    notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
    vertical: 1, // 1-top, 2-middle, 3-bottom
    horizontal: 2 // 1-left, 2-center, 3-right
  }
};

const propTypes = {
  notification: PropTypes.shape({
    open: PropTypes.bool,
    title: PropTypes.string,
    message: PropTypes.message,
    notiType: PropTypes.number,
    vertical: PropTypes.number,
    horizontal: PropTypes.number
  }),
  toggleNotification: PropTypes.func.isRequired,
  changeVerticalNotification: PropTypes.func.isRequired,
  changeHorizontalNotification: PropTypes.func.isRequired,
  changeTypeNotification: PropTypes.func.isRequired
};

class Main extends Component {
  toggleNotification() {
    const { toggleNotification, notification } = this.props;
    const { notiType, vertical, horizontal } = notification;
    toggleNotification(true, 'Type your title', 'Type your message', notiType, vertical, horizontal);
  }
  changeVerticalNotification(e) {
    const { changeVerticalNotification } = this.props;
    const vertical = parseInt(e.currentTarget.value, 10);
    changeVerticalNotification(vertical);
  }
  changeHorizontalNotification(e) {
    const { changeHorizontalNotification } = this.props;
    const horizontal = parseInt(e.currentTarget.value, 10);
    changeHorizontalNotification(horizontal);
  }
  changeTypeNotification(e) {
    const { changeTypeNotification } = this.props;
    const typeNoti = parseInt(e.currentTarget.value, 10);
    changeTypeNotification(typeNoti);
  }
  render() {
    const { notification, toggleNotification } = this.props;
    const { open, title, message, notiType, vertical, horizontal } = notification;

    return (
      <div className={style.content__parent}>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Vertical</span>
          </div>
          <div className={style.content__filter__buttons}>
            <div className={style.filter__first} htmlFor="top">
              <input
                id="top"
                type="radio"
                name="vertical"
                value="1"
                checked={vertical === 1}
                onChange={e => this.changeVerticalNotification(e)}
              />
              <label htmlFor="top">Top</label>
            </div>
            <div className={style.filter} htmlFor="middle">
              <input
                id="middle"
                type="radio"
                name="vertical"
                value="2"
                checked={vertical === 2}
                onChange={e => this.changeVerticalNotification(e)}
              />
              <label htmlFor="middle">Middle</label>
            </div>
            <div className={style.filter__last} htmlFor="bottom">
              <input
                id="bottom"
                type="radio"
                name="vertical"
                value="3"
                checked={vertical === 3}
                onChange={e => this.changeVerticalNotification(e)}
              />
              <label htmlFor="bottom">Bottom</label>
            </div>
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Horizontal</span>
          </div>
          <div className={style.content__filter__buttons}>
            <div className={style.filter__first} htmlFor="left">
              <input
                id="left"
                type="radio"
                name="horizontal"
                value="1"
                checked={horizontal === 1}
                onChange={e => this.changeHorizontalNotification(e)}
              />
              <label htmlFor="left">Left</label>
            </div>
            <div className={style.filter} htmlFor="center">
              <input
                id="center"
                type="radio"
                name="horizontal"
                value="2"
                checked={horizontal === 2}
                onChange={e => this.changeHorizontalNotification(e)}
              />
              <label htmlFor="center">Center</label>
            </div>
            <div className={style.filter__last} htmlFor="right">
              <input
                id="right"
                type="radio"
                name="horizontal"
                value="3"
                checked={horizontal === 3}
                onChange={e => this.changeHorizontalNotification(e)}
              />
              <label htmlFor="right">Right</label>
            </div>
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Type</span>
          </div>
          <div className={style.content__filter__buttons}>
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
        </div>
        <div className={style.content}>
          <button
            className={style.btn}
            onClick={() => this.toggleNotification()}
          >Notification</button>
        </div>

        <Notification
          open={open}
          title={title}
          message={message}
          notiType={notiType}
          vertical={vertical}
          horizontal={horizontal}
          toggle={toggleNotification}
        />
      </div>
    );
  }
}

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;
