import {
  UPLOAD_PRESENTER,
  UPLOAD_REMOVE_PRESENTER,

} from './constant';

export const upload = text => ({
  type: UPLOAD_PRESENTER,
  text
});

export const remove = id => ({
  type: UPLOAD_REMOVE_PRESENTER,
  id
});
