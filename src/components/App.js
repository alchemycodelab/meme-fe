import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionId, getSessionLoading } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import SignupUser from '../containers/SignupUser';
import CreateMeme from '../containers/CreateMeme';
import MemeList from '../containers/MemesList';
import Header from './Header';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  // logged out
  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    // wait to hear back
    return <Redirect to="/login" />;
  }

  // redirect to login page
  // logged in
  return <Route {...rest} />;
};

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/" component={CreateMeme} />
        <PrivateRoute path="/memes" component={MemeList} />
        <Route path="/login" component={SignupUser} />
      </Switch>
    </Router>
  );
}
  
