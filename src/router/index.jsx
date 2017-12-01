import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from 'react-router-dom';
// import jimu, { Dialog } from 'jimu-mobile';

// const {
//   DialogLayout,
// } = Dialog;
import 'jimu-mobile/dist/styles/jimu.min.css';
import { connect } from 'react-redux';

import Bundle from '../components/Bundle/bundle.js';
import * as utils from '../utils/util';
import Frame from 'bundle-loader?lazy&name=main!./frame';
import Home from 'bundle-loader?lazy&name=home!./home/home';
import Home1 from 'bundle-loader?lazy&name=home1!./home1/home';
import Home2 from 'bundle-loader?lazy&name=home2!./home2/home';


import '../styles/babel.css';

function mapStateToProps(state, b, c) {

  return { a: 1 };
}

class App extends Component {
  render() {
    return (
      <div className="content">
        {/* <DialogLayout /> */}
        <Route path="/" component={utils.syncBundle(Frame)} />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={utils.syncBundle(Home)} />
          <Route path="/home1" component={utils.syncBundle(Home1)} />
          <Route path="/home2" component={utils.syncBundle(Home2)} />
        </Switch>
      </div>
    );
  }
}

export default App = connect(mapStateToProps, null)(App);
module.exports = App;