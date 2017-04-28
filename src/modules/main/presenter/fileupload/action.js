import {
  UPLOAD_PRESENTER,
  UPLOAD_REMOVE_PRESENTER,

} from './constant';

export const upload = text => dispatch =>
  dispatch({
    type: UPLOAD_PRESENTER,
    text
  });

export const remove = id => dispatch =>
  dispatch({
    type: UPLOAD_REMOVE_PRESENTER,
    id
  });
