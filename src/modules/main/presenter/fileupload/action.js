import {
  UPLOAD_PRESENTER
} from './constant';

const uploadModel = text => ({
  type: UPLOAD_PRESENTER,
  text
});
export const upload = text => dispatch =>
  dispatch(uploadModel(text));

export default upload;
