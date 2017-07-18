import * as actions from './../../../../../src/modules/main/presenter/radiobutton/action';
import * as types from './../../../../../src/modules/main/presenter/radiobutton/constant';

describe('Main/presenter/radiobutton actions sync', () => {
  test('Test main presenter radiobutton, change radiobutton action', () => {
    const id = 1;
    const expectedAction = {
      type: types.CHANGE_RADIOBUTTON_PRESENTER,
      id
    };
    expect(actions.changeRadioButton(id)).toEqual(expectedAction);
  });
});
