import * as actions from './../../../../../src/modules/main/presenter/notification/action';
import * as types from './../../../../../src/modules/main/presenter/notification/constant';

describe('Main/presenter/notification actions sync', () => {
  test('Test main presenter notification, toggle action', () => {
    const open = true;
    const title = 'Title test';
    const message = 'Message test';
    const notiType = 1;
    const vertical = 1;
    const horizontal = 1;
    const expectedAction = {
      type: types.TOGGLE_NOTIFICATION,
      open,
      title,
      message,
      notiType,
      vertical,
      horizontal
    };
    expect(actions.toggleNotificationModel(
      open,
      title,
      message,
      notiType,
      vertical,
      horizontal
    )).toEqual(expectedAction);
  });

  test('Test main presenter notification, change vertical action', () => {
    const vertical = true;
    const expectedAction = {
      type: types.CHANGE_VERTICAL_NOTIFICATION,
      vertical,
    };
    expect(actions.changeVerticalNotification(vertical)).toEqual(expectedAction);
  });

  test('Test main presenter notification, change horizontal action', () => {
    const horizontal = true;
    const expectedAction = {
      type: types.CHANGE_HORIZONTAL_NOTIFICATION,
      horizontal
    };
    expect(actions.changeHorizontalNotification(horizontal)).toEqual(expectedAction);
  });

  test('Test main presenter notification, change type action', () => {
    const notiType = true;
    const expectedAction = {
      type: types.CHANGE_TYPE_NOTIFICATION,
      notiType
    };
    expect(actions.changeTypeNotification(notiType)).toEqual(expectedAction);
  });
});
