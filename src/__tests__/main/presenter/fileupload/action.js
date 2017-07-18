import * as actions from './../../../../../src/modules/main/presenter/fileupload/action';
import * as types from './../../../../../src/modules/main/presenter/fileupload/constant';

describe('Main/presenter/fileupload actions sync', () => {
  test('Test main presenter file upload, upload action', () => {
    const text = 'test.pdf';
    const expectedAction = {
      type: types.UPLOAD_PRESENTER,
      text
    };
    expect(actions.upload(text)).toEqual(expectedAction);
  });

  test('Test main presenter file upload, remove action', () => {
    const id = 1;
    const expectedAction = {
      type: types.UPLOAD_REMOVE_PRESENTER,
      id
    };
    expect(actions.remove(id)).toEqual(expectedAction);
  });
});
