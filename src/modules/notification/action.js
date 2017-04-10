import { TOGGLE } from './constant';

const toggleModel = (open, notiType, message, vertical, horizontal) => ({
  type: TOGGLE,
  open,
  notiType,
  message,
  vertical,
  horizontal
});

export const toggle = (open, notiType = 1, message, vertical = 1, horizontal = 2) => (dispatch) => {
  dispatch(toggleModel(open, notiType, message, vertical, horizontal));
  setTimeout(() => {
    dispatch(toggleModel(false, notiType, '', vertical, horizontal));
  }, 2000);
};

export default toggle;
