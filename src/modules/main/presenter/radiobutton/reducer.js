import {
  CHANGE_RADIOBUTTON_PRESENTER
} from './constant';

const init = {
  button: 1
};

const radioButtonPresenter = (state = init, action) => {
  switch (action.type) {
    case CHANGE_RADIOBUTTON_PRESENTER: {
      return Object.assign({}, state, { button: action.id });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default radioButtonPresenter;
