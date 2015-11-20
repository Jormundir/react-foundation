import React from 'react';
import { Router, Route, Link } from 'react-router';

import App from 'pages/App';

export default (
  <Router>
    <Route path="/" component={App} />
  </Router>
);
