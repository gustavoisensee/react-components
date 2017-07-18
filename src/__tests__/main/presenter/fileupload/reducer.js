import reducer from './../../../../../src/modules/main/presenter/fileupload/reducer';
import * as types from './../../../../../src/modules/main/presenter/fileupload/constant';

describe('Main/Presenter/fileupload reducer', () => {
  test('should return the initial state', () => {
    const state = undefined;
    const action = {};
    const expectedState = types.ITEMS;
    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle UPLOAD_PRESENTER', () => {
    const state = [
      { id: 1, text: 'Test 1' },
      { id: 2, text: 'Test 2' }
    ];
    const action = {
      type: types.UPLOAD_PRESENTER,
      text: 'Test 3'
    };
    const expectedState = [
      { id: 1, text: 'Test 1' },
      { id: 2, text: 'Test 2' },
      { id: 3, text: 'Test 3' }
    ];

    expect(reducer(state, action)).toEqual(expectedState);
  });

  test('should handle UPLOAD_REMOVE_PRESENTER', () => {
    const state = [
      { id: 1, text: 'Test 1' },
      { id: 2, text: 'Test 2' },
      { id: 3, text: 'Test 3' }
    ];
    const action = {
      type: types.UPLOAD_REMOVE_PRESENTER,
      id: 3
    };
    const expectedState = [
      { id: 1, text: 'Test 1' },
      { id: 2, text: 'Test 2' }
    ];

    expect(reducer(state, action)).toEqual(expectedState);
  });
});
