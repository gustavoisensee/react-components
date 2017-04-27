import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main/reducer';
import notificationPresenter from './main/presenter/notification/reducer';
import menuPresenter from './main/presenter/menu/reducer';
import radioButtonPresenter from './main/presenter/radiobutton/reducer';
import fileUploadPresenter from './main/presenter/fileupload/reducer';

const reducersCombined = combineReducers({
  main,
  notificationPresenter,
  menuPresenter,
  radioButtonPresenter,
  fileUploadPresenter,
  routing: routerReducer
});

export default reducersCombined;
