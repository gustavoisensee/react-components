import {
  TOGGLE_NOTIFICATION,
  CHANGE_POSITION_NOTIFICATION,
  CHANGE_TYPE_NOTIFICATION
} from './constant';

// let timer;

const toggleNotificationModel = (open, title, message, notiType, position, horizontal) => ({
  type: TOGGLE_NOTIFICATION,
  open,
  title,
  message,
  notiType,
  position,
  horizontal
});

export const toggleNotification = (open, title, message, notiType, position,
  horizontal) => (dispatch) => {
    dispatch(toggleNotificationModel(open, title, message, notiType, position, horizontal));
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch(toggleNotificationModel(false, '', '', notiType, position, horizontal));
    // }, 10000);
  };

const changePositionNotificationModel = position => ({
  type: CHANGE_POSITION_NOTIFICATION,
  position
});

export const changePositionNotification = position => dispatch =>
  dispatch(changePositionNotificationModel(position));

const changeTypeNotificationModel = notiType => ({
  type: CHANGE_TYPE_NOTIFICATION,
  notiType
});

export const changeTypeNotification = notiType => dispatch =>
  dispatch(changeTypeNotificationModel(notiType));
