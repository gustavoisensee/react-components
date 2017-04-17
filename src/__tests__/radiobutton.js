import React from 'react';
import renderer from 'react-test-renderer';
import Radiobutton from './../modules/radiobutton/component';

describe('Radiobutton component test', () => {
  test('Radiobutton component renders', () => {
    const props = {
      id: '',
      name: '',
      text: '',
      value: 1,
      selected: 1,
      extraClass: '',
      change: () => {}
    };

    const tree = renderer.create(
      <Radiobutton {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
