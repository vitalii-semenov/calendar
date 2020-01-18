import React, { Component } from 'react';
import { withRouter } from 'react-router';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
        <>
          {children}
        </>
    )
  }
}

export default withRouter(App)
