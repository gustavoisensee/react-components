import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import main from './main/reducer';
import notificationPresenter from './main/presenter/notification/reducer';
import menuPresenter from './main/presenter/menu/reducer';

const reducersCombined = combineReducers({
  main,
  notificationPresenter,
  menuPresenter,
  routing: routerReducer
});

export default reducersCombined;
