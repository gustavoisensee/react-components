import {
  CHANGE_MENU_ITEMS,
  MENU_ITEMS
} from './constant';

const init = {
  menu: MENU_ITEMS
};

const main = (state = init, action) => {
  switch (action.type) {
    case CHANGE_MENU_ITEMS: {
      console.log(2);
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

export default main;
