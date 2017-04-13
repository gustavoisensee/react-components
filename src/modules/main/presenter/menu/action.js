import {
  CHANGE_MENU_ITEMS
} from './constant';

const changeMenuItemModel = id => ({
  type: CHANGE_MENU_ITEMS,
  id
});
export const changeMenuItem = id => dispatch =>
  dispatch(changeMenuItemModel(id));

export default changeMenuItem;
