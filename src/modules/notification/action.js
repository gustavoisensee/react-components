import { TOGGLE } from './constant';

// let timer;
/*
toggle(true, 'Type your title', 'Type your message',
  notification.position, notification.notiType, horizontal);
*/
const toggleModel = (open, title, message, notiType, position, horizontal) => ({
  type: TOGGLE,
  open,
  title,
  message,
  notiType,
  position,
  horizontal
});

export const toggle = (open, title, message, notiType, position,
  horizontal) => (dispatch) => {
    dispatch(toggleModel(open, title, message, notiType, position, horizontal));
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch(toggleModel(false, '', notiType, position, horizontal));
    // }, 2000);
  };

export default toggle;
