import React from 'react';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import StaticRouter from 'react-router-dom/StaticRouter';

import { makeRoutes } from './routes';
import { isBrowser } from './utils';

// exported to be used in tests
export const Router = isBrowser ? BrowserRouter : StaticRouter;

export default (props) => (
  <Router {...props} >
    {makeRoutes()}
  </Router>
);
