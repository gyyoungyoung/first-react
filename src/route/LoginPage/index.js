import React from 'react';
import {Route} from 'react-router-dom';
import Login from './route/LoginPage';
import Logina from './route/LoginPage copy';


class LoginHome extends React.Component {
  render() {
    // let aaa = useRouteMatch();
    // console.log('path', path);
    // console.log('url', url);
    console.log('useRouteMatch', this.props.history);
    return (
      <div>
        <p>11111</p>
        <p>22222</p>
        <p>33333</p>
        <Route exact path="/login" component={Login} />
        <Route path="/login/aa" component={Logina} />
      </div>
    )
  }
}

export default LoginHome;
