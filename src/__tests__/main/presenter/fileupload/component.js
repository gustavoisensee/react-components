import React from 'react';
import renderer from 'react-test-renderer';
import PresenterFileUpload from './../../../../modules/main/presenter/fileupload/component';

describe('Main/presenter/fileupload component test', () => {
  test('Main/presenter/fileupload component renders', () => {
    const props = {
      items: [],
      upload: () => {},
      remove: () => {}
    };

    const tree = renderer.create(
      <PresenterFileUpload {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
