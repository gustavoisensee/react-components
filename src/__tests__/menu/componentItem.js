import React from 'react';
import renderer from 'react-test-renderer';
import MenuItem from './../../modules/menu/componentItem';

describe('MenuItem component test', () => {
  test('MenuItem component renders', () => {
    const props = {
      item: {
        id: 1,
        text: 'test',
        selected: true
      },
      click: () => {}
    };

    const tree = renderer.create(
      <MenuItem {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
