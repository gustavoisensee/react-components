import {
  CHANGE_RADIOBUTTON_PRESENTER
} from './constant';

const changeRadioButtonItemModel = id => ({
  type: CHANGE_RADIOBUTTON_PRESENTER,
  id
});
export const changeRadioButton = id => dispatch =>
  dispatch(changeRadioButtonItemModel(id));

export default changeRadioButton;
