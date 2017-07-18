import reducer from './../../../../../src/modules/main/presenter/notification/reducer';
import * as types from './../../../../../src/modules/main/presenter/notification/constant';

describe('Main/Presenter/notification reducer', () => {
  test('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = {
      notification: {
        open: false,
        title: '',
        message: '',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      }
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle TOGGLE_NOTIFICATION', () => {
    const state = {
      notification: {
        open: false,
        title: '',
        message: '',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      }
    };
    const notification = {
      open: true,
      title: 'Test 1',
      message: 'Teste 1',
      notiType: 1,
      vertical: 1,
      horizontal: 2
    };
    const action = Object.assign({}, { type: types.TOGGLE_NOTIFICATION }, notification);

    expect(reducer(state, action)).toEqual({ notification });
  });

  test('should handle CHANGE_VERTICAL_NOTIFICATION', () => {
    const state = {
      notification: {
        open: false,
        title: '',
        message: '',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      }
    };
    const action = {
      type: types.CHANGE_VERTICAL_NOTIFICATION,
      vertical: 2
    };
    const expectedState = {
      notification: Object.assign({}, state.notification, { vertical: action.vertical })
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle CHANGE_HORIZONTAL_NOTIFICATION', () => {
    const state = {
      notification: {
        open: false,
        title: '',
        message: '',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      }
    };
    const action = {
      type: types.CHANGE_HORIZONTAL_NOTIFICATION,
      horizontal: 1
    };
    const expectedState = {
      notification: Object.assign({}, state.notification, { horizontal: action.horizontal })
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle CHANGE_TYPE_NOTIFICATION', () => {
    const state = {
      notification: {
        open: false,
        title: '',
        message: '',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      }
    };
    const action = {
      type: types.CHANGE_TYPE_NOTIFICATION,
      notiType: 2
    };
    const expectedState = {
      notification: Object.assign({}, state.notification, { notiType: action.notiType })
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
