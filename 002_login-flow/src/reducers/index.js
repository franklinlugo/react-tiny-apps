import { combineReducers } from 'redux';

const user = (state = {}, action = {}) => {
  return state;
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
