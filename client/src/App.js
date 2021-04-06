import React, { Component } from 'react';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';
import FrontPage from './components/FrontPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    const { history } = this.props;

    return (
      <div className="App">
        <Switch>
          <Route history={history} path="/home" component={FrontPage} />
          <Route history={history} path="/login" component={SignIn} />
          <Route history={history} path="/sign-up" component={SignUp} />
          <Redirect from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
