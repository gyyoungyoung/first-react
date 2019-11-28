import React from 'react';
import {HashRouter, Route, Switch, useHistory} from 'react-router-dom';
import Home from './route/HomePage/HomePage';
import Login from './route/LoginPage/LoginPage';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <HashRouter history={useHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
        </Switch>
    </HashRouter>
    )
  }
}

export default App;
