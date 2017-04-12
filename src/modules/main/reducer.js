import {
  CHANGE_POSITION_NOTIFICATION,
  CHANGE_TYPE_NOTIFICATION
} from './constant';

const init = {
  notiType: 1, // 1-success, 2-info, 3-warning, 4-error/fail,
  position: 1 // 1-top, 2-middle, 3-bottom
};

const main = (state = init, action) => {
  switch (action.type) {
    case CHANGE_POSITION_NOTIFICATION: {
      return Object.assign({}, state, {
        position: action.position
      });
    }
    case CHANGE_TYPE_NOTIFICATION: {
      return Object.assign({}, state, {
        notiType: action.notiType
      });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default main;
