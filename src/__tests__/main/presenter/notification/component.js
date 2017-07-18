import React from 'react';
import renderer from 'react-test-renderer';
import PresenterNotification from './../../../../modules/main/presenter/notification/component';

describe('Main/presenter/notification component test', () => {
  test('Main/presenter/notification component renders', () => {
    const props = {
      notification: {
        open: true,
        title: 'Title test',
        message: 'Message test',
        notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
        vertical: 1, // 1-top, 2-middle, 3-bottom
        horizontal: 2 // 1-left, 2-center, 3-right
      },
      toggleNotification: () => {},
      changeVerticalNotification: () => {},
      changeHorizontalNotification: () => {},
      changeTypeNotification: () => {}
    };

    const tree = renderer.create(
      <PresenterNotification {...props} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
