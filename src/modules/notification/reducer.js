import { TOGGLE } from './constant';

const init = {
  open: false,
  title: '',
  message: '',
  notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
  position: 1, // 1-top, 2-middle, 3-bottom
  horizontal: 2 // 1-left, 2-center, 3-right
};

const notification = (state = init, action) => {
  switch (action.type) {
    case TOGGLE: {
      return Object.assign({}, state, {
        open: action.open,
        title: action.title,
        message: action.message,
        notiType: action.notiType,
        position: action.position,
        horizontal: action.horizontal
      });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default notification;
