import {
  CHANGE_MENU_ITEMS
} from './constant';

export const changeMenuItem = id => ({
  type: CHANGE_MENU_ITEMS,
  id
});

export default changeMenuItem;

