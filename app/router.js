import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './pages/home';
import UserList from './pages/user-list';
import UserProfile from './pages/user-profile';
import WidgetList from './pages/widget-list';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>ś
      </Route>

    </Route>
  </Router>
);
