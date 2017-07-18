import {
  CHANGE_MENU_ITEMS_PRESENTER
} from './constant';

export const changeMenuItem = id => ({
  type: CHANGE_MENU_ITEMS_PRESENTER,
  id
});

export default changeMenuItem;
