import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="login-home">
        {this.props.children || <div>88888</div>}
      </div>
    )
  }
}

export default Home;
