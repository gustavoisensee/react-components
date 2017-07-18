import React from 'react';
import renderer from 'react-test-renderer';
import PresenterRadioButton from './../../../../modules/main/presenter/radiobutton/component';

describe('Main/presenter/radiobutton component test', () => {
  test('Main/presenter/radiobutton component renders', () => {
    const props = {
      button: 0,
      changeRadioButton: () => {}
    };

    const tree = renderer.create(
      <PresenterRadioButton {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
