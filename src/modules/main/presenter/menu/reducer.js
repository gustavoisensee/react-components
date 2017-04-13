import {
  CHANGE_MENU_ITEMS_PRESENTER,
  MENU_ITEMS
} from './constant';

const init = {
  menu: MENU_ITEMS
};

const menuPresenter = (state = init, action) => {
  switch (action.type) {
    case CHANGE_MENU_ITEMS_PRESENTER: {
      const menus = Object.assign([], state.menu);
      for (let i = 0; i < menus.length; i += 1) {
        menus[i].selected = false;
        if (menus[i].id === action.id) {
          menus[i].selected = true;
        }
      }
      return Object.assign({}, state, { menu: menus });
    }
    default: {
      return Object.assign({}, state);
    }
  }
};

export default menuPresenter;
