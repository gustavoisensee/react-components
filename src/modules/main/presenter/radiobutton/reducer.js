import {
  CHANGE_RADIOBUTTON_PRESENTER,
  BUTTONS
} from './constant';

const init = {
  button: BUTTONS
};

const radioButtonPresenter = (state = init, action) => {
  switch (action.type) {
    case CHANGE_RADIOBUTTON_PRESENTER: {
      const buttons = Object.assign([], state.button);
      for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].selected = false;
        if (buttons[i].id === action.id) {
          buttons[i].selected = true;
        }
      }
      return Object.assign({}, state, { button: buttons });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default radioButtonPresenter;
