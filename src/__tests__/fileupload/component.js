import React from 'react';
import renderer from 'react-test-renderer';
import FileUpload from './../../modules/fileupload/component';

describe('FileUpload component test', () => {
  test('FileUpload component renders', () => {
    const props = {
      items: [],
      upload: () => {},
      remove: () => {}
    };

    const tree = renderer.create(
      <FileUpload {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
