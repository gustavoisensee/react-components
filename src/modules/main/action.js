import {
  CHANGE_POSITION_NOTIFICATION,
  CHANGE_TYPE_NOTIFICATION
} from './constant';

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
