import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="login-home">
        {this.props.children || <div>77777</div>}
      </div>
    )
  }
}

export default Home;
