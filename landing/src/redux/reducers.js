// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
import settingsReducer from './settings-slice';
import menu from './menu-slice';
import authUser from './auth-slice';
// import todoApp from './todo/reducer';
// import chatApp from './chat/reducer';
// import surveyListApp from './surveyList/reducer';
// import surveyDetailApp from './surveyDetail/reducer';

const reducers = combineReducers({
  menu,
  settings: settingsReducer,
  authUser
  // todoApp,
  // chatApp,
  // surveyListApp,
  // surveyDetailApp
});

export default reducers;
