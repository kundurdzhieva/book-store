import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import routes from './routes.js';

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
);

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    );
  }
}

export default App;
