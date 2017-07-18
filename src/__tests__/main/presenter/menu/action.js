import * as actions from './../../../../../src/modules/main/presenter/menu/action';
import * as types from './../../../../../src/modules/main/presenter/menu/constant';

describe('Main/presenter/menu actions sync', () => {
  test('Test main presenter menu, change items action', () => {
    const id = 1;
    const expectedAction = {
      type: types.CHANGE_MENU_ITEMS_PRESENTER,
      id
    };
    expect(actions.changeMenuItem(id)).toEqual(expectedAction);
  });
});
