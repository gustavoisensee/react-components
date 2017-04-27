import {
  UPLOAD_PRESENTER,
  ITEMS
} from './constant';

const fileUploadPresenter = (state = ITEMS, action) => {
  switch (action.type) {
    case UPLOAD_PRESENTER: {
      const newState = Object.assign({}, state);
      const lastItem = newState.sort((a, b) => a.id - b.id)[0];
      newState.push({
        id: lastItem.id + 1
      });
      return newState;
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default fileUploadPresenter;
