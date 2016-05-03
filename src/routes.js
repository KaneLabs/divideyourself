import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const ComingSoon = () => {
  return <div>This Feature is Coming Soon</div>
}


export default (
  <Route path='/' component={App}>
    <Route path='knowledge' component={ComingSoon}/>
    <Route path='adventure' component={ComingSoon} />
    <Route path='market' component={ComingSoon} />
  </Route>
);
