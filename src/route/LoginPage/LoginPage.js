import React from 'react';

import './LoginPage.scss';

class LoginPage extends React.Component {

  jump = () => {
    const { history } = this.props;
    history.replace('')
  }

  componentDidMount() {
    const { history } = this.props;
    console.log('history', history);
  }

  render() {
    return (
    <div className="LoginPage">
      <a
          className="App-link"
          href="#/"
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
