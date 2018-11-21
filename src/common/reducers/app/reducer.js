import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';


function name(state='',action) {
  switch (action.type) {
    case ActionTypes.UPDATE_NAME:
      return action.name;
    default:
      return state;
  }
}

export default combineReducers({ name });
