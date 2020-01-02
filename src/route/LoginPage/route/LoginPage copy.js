import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import Home from './Home'
import Home2 from './Home copy'

import './LoginPage.scss';

class LoginPage extends React.Component {

  jump = () => {
    const { history } = this.props;
    console.log('history', history);
    history.replace('/login/aa')
  }

  componentDidMount() {
    // const { history } = this.props;
    axios.get('http://localhost:3000/admin/lists')
    .then(res => {
      console.log('res', res);
    })
  }

  render() {
    return (
    <div className="LoginPage">
      <a
          className="App-link"
          href="/"
        >
          Learn React222222222222
      </a>
      <span
          className="App-link"
          onClick={this.jump}
        >
          Learn React3333333333
      </span>

      <Route exact path="/login/aa" component={Home} />
      <Route exact path="/login/aa/bb" component={Home2} />
    </div>
    )
  }
}

export default LoginPage;
