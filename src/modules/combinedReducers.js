import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main/reducer';
import notificationPresenter from './main/presenter/notification/reducer';
import menuPresenter from './main/presenter/menu/reducer';
import radioButtonPresenter from './main/presenter/radiobutton/reducer';

const reducersCombined = combineReducers({
  main,
  notificationPresenter,
  menuPresenter,
  radioButtonPresenter,
  routing: routerReducer
});

export default reducersCombined;
