import { TOGGLE } from './constant';

const init = {
  open: false,
  notiType: 1, // 1-success, 2-warning, 3-error/fail,
  message: '',
  vertical: 1, // 1-top, 2-center, 3-bottom
  horizontal: 2 // 1-left, 2-center, 3-right
};

const notification = (state = init, action) => {
  switch (action.type) {
    case TOGGLE: {
      return Object.assign({}, state, {
        open: action.open,
        notiType: action.notiType,
        message: action.message,
        vertical: action.vertical,
        horizontal: action.horizontal
      });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default notification;
