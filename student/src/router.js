import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import home from './routes/home'
import add from './routes/add'


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/home" exact component={home} />
        <Route path="/add" exact component={add} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
