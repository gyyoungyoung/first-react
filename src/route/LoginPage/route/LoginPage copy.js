import React from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';

import Home from './Home'
import Home2 from './Home copy'

import './LoginPage.scss';

class LoginPage extends React.Component {

  searchOptions = {
    limit: 10,
    page: 1,
    q: "魔法少女"
  };

  jump = () => {
    const { history } = this.props;
    console.log('history', history);
    history.replace('/login/aa')
  }

  async fetchData() {
    let url = new URL("https://api.jikan.moe/v3/search/anime");
    for (let key in this.searchOptions) {
      url.searchParams.set(key, this.searchOptions[key]);
    }
    let response = await fetch(url.href);
    let data = await response.json();
    console.log('data', data);
    return data;
  }

  componentDidMount() {
    // const { history } = this.props;
    axios.get('http://localhost:3000/admin/lists')
    .then(res => {
      console.log('res', res);
    })
    this.fetchData();
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
