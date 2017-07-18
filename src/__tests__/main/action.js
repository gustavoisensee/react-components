import * as actions from './../../../src/modules/main/action';
import * as types from './../../../src/modules/main/constant';

describe('Main actions sync', () => {
  test('Test change menu items action', () => {
    const id = 1;
    const expectedAction = {
      type: types.CHANGE_MENU_ITEMS,
      id
    };
    expect(actions.changeMenuItemModel(id)).toEqual(expectedAction);
  });
});
