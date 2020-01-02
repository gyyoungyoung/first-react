import React from 'react';
import axios from 'axios';

import './LoginPage.scss';

class LoginPage extends React.Component {

  jump = () => {
    const { history } = this.props;
    console.log('history', history);
    history.replace('/login/aa/bb')
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
          Learn React
      </a>
      <span
          className="App-link"
          onClick={this.jump}
        >
          Learn React
      </span>
      
      
    </div>
    )
  }
}

export default LoginPage;
