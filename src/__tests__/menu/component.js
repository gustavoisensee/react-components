import React from 'react';
import renderer from 'react-test-renderer';
import Menu from './../../modules/menu/component';

describe('Menu component test', () => {
  test('Menu component renders', () => {
    const props = {
      items: [],
      click: () => {}
    };

    const tree = renderer.create(
      <Menu {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
