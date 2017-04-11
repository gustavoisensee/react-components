import { TOGGLE } from './constant';

// let timer;

const toggleModel = (open, notiType, title, message, vertical, horizontal) => ({
  type: TOGGLE,
  open,
  notiType,
  title,
  message,
  vertical,
  horizontal
});

export const toggle = (open, notiType = 1, title, message, vertical = 1,
  horizontal = 2) => (dispatch) => {
    dispatch(toggleModel(open, notiType, title, message, vertical, horizontal));
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch(toggleModel(false, notiType, '', vertical, horizontal));
    // }, 2000);
  };

export default toggle;
