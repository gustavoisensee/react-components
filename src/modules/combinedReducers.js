import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import main from './main/reducer';
import notification from './notification/reducer';

const reducersCombined = combineReducers({
  main,
  notification,
  routing: routerReducer
});

export default reducersCombined;
