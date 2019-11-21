import { combineReducers } from 'redux';
import session from './sessionReducer';
import meme from './memeReducer';

export default combineReducers({
  session,
  meme
});
