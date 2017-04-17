import {
  CHANGE_MENU_ITEMS_PRESENTER
} from './constant';

const changeMenuItemModel = id => ({
  type: CHANGE_MENU_ITEMS_PRESENTER,
  id
});
export const changeMenuItem = id => dispatch =>
  dispatch(changeMenuItemModel(id));

export default changeMenuItem;
