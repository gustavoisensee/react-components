import React from 'react';
import renderer from 'react-test-renderer';
import Main from './../../modules/main/component';

describe('Main component test', () => {
  test('Main component renders', () => {
    const props = {
      menu: [
        { id: 0, text: '', selected: true },
      ],
      changeMenuItem: () => {}
    };

    const tree = renderer.create(
      <Main {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
