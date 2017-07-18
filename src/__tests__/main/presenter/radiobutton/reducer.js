import reducer from './../../../../../src/modules/main/presenter/radiobutton/reducer';
import * as types from './../../../../../src/modules/main/presenter/radiobutton/constant';

describe('Main/Presenter/radiobutton reducer', () => {
  test('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = {
      button: 1
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle CHANGE_RADIOBUTTON_PRESENTER', () => {
    const state = {
      button: 1
    };
    const action = {
      type: types.CHANGE_RADIOBUTTON_PRESENTER,
      id: 2
    };
    const expectedState = {
      button: 2
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
