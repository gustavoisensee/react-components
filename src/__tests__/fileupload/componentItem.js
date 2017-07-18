import React from 'react';
import renderer from 'react-test-renderer';
import FileUploadItem from './../../modules/fileupload/componentItem';

describe('FileUploadItem component test', () => {
  test('FileUploadItem component renders', () => {
    const props = {
      item: {
        id: 1,
        text: 'test'
      },
      remove: () => {}
    };

    const tree = renderer.create(
      <FileUploadItem {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
