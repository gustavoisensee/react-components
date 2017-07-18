import {
  TOGGLE_NOTIFICATION,
  CHANGE_VERTICAL_NOTIFICATION,
  CHANGE_HORIZONTAL_NOTIFICATION,
  CHANGE_TYPE_NOTIFICATION
} from './constant';

let timer;

export const toggleNotificationModel = (open, title, message, notiType, vertical, horizontal) => ({
  type: TOGGLE_NOTIFICATION,
  open,
  title,
  message,
  notiType,
  vertical,
  horizontal
});

export const toggleNotification = (open, title, message, notiType, vertical,
  horizontal
) => (dispatch) => {
  dispatch(toggleNotificationModel(open, title, message, notiType, vertical, horizontal));
  clearTimeout(timer);
  timer = setTimeout(() => {
    dispatch(toggleNotificationModel(false, '', '', notiType, vertical, horizontal));
  }, (1000 * 90));
};

export const changeVerticalNotification = vertical => ({
  type: CHANGE_VERTICAL_NOTIFICATION,
  vertical
});

export const changeHorizontalNotification = horizontal => ({
  type: CHANGE_HORIZONTAL_NOTIFICATION,
  horizontal
});

export const changeTypeNotification = notiType => ({
  type: CHANGE_TYPE_NOTIFICATION,
  notiType
});
