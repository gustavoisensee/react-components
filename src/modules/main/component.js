import React, { Component, PropTypes } from 'react';
import style from './style.scss';
import Notification from './../notification/component';
import RadioButton from './../radiobutton/component';

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
    const {
      notification,
      toggleNotification,
      changeVerticalNotification,
      changeHorizontalNotification,
      changeTypeNotification
    } = this.props;
    const { open, title, message, notiType, vertical, horizontal } = notification;
    const verticalButtons = [
      { id: 'top', name: 'vertical', text: 'Top', value: '1', extraClass: 'first' },
      { id: 'middle', name: 'vertical', text: 'Middle', value: '2', extraClass: '' },
      { id: 'bottom', name: 'vertical', text: 'Bottom', value: '3', extraClass: 'last' }
    ];
    const horizontalButtons = [
      { id: 'left', name: 'horizontal', text: 'Left', value: '1', extraClass: 'first' },
      { id: 'center', name: 'horizontal', text: 'Center', value: '2', extraClass: '' },
      { id: 'right', name: 'horizontal', text: 'Right', value: '3', extraClass: 'last' }
    ];
    const notiTypeButtons = [
      { id: 'success', name: 'typeNoti', text: 'Success', value: '1', extraClass: 'first' },
      { id: 'info', name: 'typeNoti', text: 'Info', value: '2', extraClass: '' },
      { id: 'warning', name: 'typeNoti', text: 'Warning', value: '3', extraClass: '' },
      { id: 'error', name: 'typeNoti', text: 'Error', value: '4', extraClass: 'last' }
    ];
    return (
      <div className={style.content__parent}>
        <div className={style.content__filter}>
          <div className={style.content__filter__span}>
            <span>Vertical</span>
          </div>
          <div className={style.content__filter__buttons}>
            {verticalButtons.map(item =>
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
            {horizontalButtons.map(item =>
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
            {notiTypeButtons.map(item =>
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

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

export default Main;
