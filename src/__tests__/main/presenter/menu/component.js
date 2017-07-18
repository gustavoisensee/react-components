import React from 'react';
import renderer from 'react-test-renderer';
import PresenterMenu from './../../../../modules/main/presenter/menu/component';

describe('Main/presenter/menu component test', () => {
  test('Main/presenter/menu component renders', () => {
    const props = {
      menu: [],
      changeMenuItem: () => {}
    };

    const tree = renderer.create(
      <PresenterMenu {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
