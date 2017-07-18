import reducer from './../../../../../src/modules/main/presenter/menu/reducer';
import * as types from './../../../../../src/modules/main/presenter/menu/constant';

describe('Main/Presenter/menu reducer', () => {
  test('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = {
      menu: types.MENU_ITEMS
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle CHANGE_MENU_ITEMS_PRESENTER', () => {
    const state = {
      menu: [
        { id: 1, title: 'Title jest 1', selected: true },
        { id: 2, title: 'Title jest 2', selected: false },
      ]
    };
    const action = {
      type: types.CHANGE_MENU_ITEMS_PRESENTER,
      id: 2
    };
    const expectedState = {
      menu: [
        { id: 1, title: 'Title jest 1', selected: false },
        { id: 2, title: 'Title jest 2', selected: true },
      ]
    };
    expect(reducer(state, action)).toEqual(expectedState);
  });
});
