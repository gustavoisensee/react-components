import React, { PropTypes, Component } from 'react';
import RadioButton from './../../../radiobutton/component';
import Notification from './../../../notification/component';
import style from './style.scss';

import {
  VERTICAL_BUTTONS,
  HORIZONTAL_BUTTONS,
  NOTI_TYPE_BUTTONS
} from './constant';

const defaultProps = {
  notification: {
    open: false,
    title: '',
    message: '',
    notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
    vertical: 1, // 1-top, 2-middle, 3-bottom
    horizontal: 2 // 1-left, 2-center, 3-right
  },
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
  changeTypeNotification: PropTypes.func.isRequired,
};

class NotificationPresenter extends Component {
  toggleNotification() {
    const { toggleNotification, notification } = this.props;
    const { notiType, vertical, horizontal } = notification;
    toggleNotification(true, 'Type your title', 'Type your message', notiType, vertical, horizontal);
  }
  render() {
    const {
      notification,
      toggleNotification,
      changeVerticalNotification,
      changeHorizontalNotification,
      changeTypeNotification,
    } = this.props;
    const { open, title, message, notiType, vertical, horizontal } = notification;

    return (
      <div className={style.content}>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Vertical</span>
          </div>
          <div className={style.content__filter__buttons}>
            {VERTICAL_BUTTONS.map(item =>
              <RadioButton
                id={item.id}
                name={item.name}
                text={item.text}
                value={item.value}
                selected={vertical}
                extraClass={item.extraClass}
                change={changeVerticalNotification}
              />
            )}
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Horizontal</span>
          </div>
          <div className={style.content__filter__buttons}>
            {HORIZONTAL_BUTTONS.map(item =>
              <RadioButton
                id={item.id}
                name={item.name}
                text={item.text}
                value={item.value}
                selected={horizontal}
                extraClass={item.extraClass}
                change={changeHorizontalNotification}
              />
            )}
          </div>
        </div>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Type</span>
          </div>
          <div className={style.content__filter__buttons}>
            {NOTI_TYPE_BUTTONS.map(item =>
              <RadioButton
                id={item.id}
                name={item.name}
                text={item.text}
                value={item.value}
                selected={notiType}
                extraClass={item.extraClass}
                change={changeTypeNotification}
              />
            )}
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

NotificationPresenter.defaultProps = defaultProps;
NotificationPresenter.propTypes = propTypes;

export default NotificationPresenter;
