import React from 'react';
import renderer from 'react-test-renderer';
import Notification from './../modules/notification/component';

describe('Notification component test', () => {
  test('Notification component renders', () => {
    const props = {
      open: false,
      title: '',
      message: '',
      notiType: 1,
      vertical: 1,
      horizontal: 1,
      toggle: () => {}
    };

    const tree = renderer.create(
      <Notification {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
