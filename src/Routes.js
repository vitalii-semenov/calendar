import React from 'react';
import {Route, Switch} from 'react-router';
import App from './containers/App';
import Routes from './constants/routes';
import Calendar from './components/Home/Home'


export default () => (
  <App>
    <Switch>
      <Route exact path={Routes.HOME} component={Calendar}/>
    </Switch>
  </App>
);
