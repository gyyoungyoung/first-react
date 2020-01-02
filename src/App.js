import React from 'react';
import {BrowserRouter as Router , Route, Switch, useHistory} from 'react-router-dom';
import Home from './route/HomePage/HomePage';
import Login from './route/LoginPage/index';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router  history={useHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
    </Router >
    )
  }
}

export default App;
