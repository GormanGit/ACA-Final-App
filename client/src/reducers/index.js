import recipes from './recipe_reducer';
import { combineReducers } from 'redux';
import  favorites  from './fav_reducer';
import reminders from './list_reducers';



const rootReducer =  combineReducers({
  recipes,
  favorites,
  reminders
});

export default rootReducer;
