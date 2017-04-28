import {
  UPLOAD_PRESENTER,
  UPLOAD_REMOVE_PRESENTER,
  ITEMS
} from './constant';

const fileUploadPresenter = (state = ITEMS, action) => {
  switch (action.type) {
    case UPLOAD_PRESENTER: {
      const newState = Object.assign([], state);
      const lastItem = (newState.length > 0 ?
        newState.sort((a, b) => a.id - b.id)[newState.length - 1] :
        { id: 0 }
      );
      newState.push({
        id: lastItem.id + 1,
        text: action.text
      });
      return newState;
    }
    case UPLOAD_REMOVE_PRESENTER: {
      const newState = Object.assign([], state);
      return newState.filter(item => item.id !== action.id);
    }
    default: {
      return Object.assign([], state);
    }
  }
};

export default fileUploadPresenter;
