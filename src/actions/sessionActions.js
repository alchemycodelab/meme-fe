import { signup, login } from '../services/auth';

export const SET_SESSION = 'SET_SESSION';
export const sessionSignup = (username, password) => dispatch => {
  return signup(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

export const sessionLogin = (username, password) => dispatch => {
  return login(username, password)
    .then(user => {
      dispatch({
        type: SET_SESSION,
        payload: user
      });
    });
};

