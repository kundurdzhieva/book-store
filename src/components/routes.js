import React from 'react';

import HomePage from './common/homePage.jsx';
import AboutPage from './common/aboutPage.jsx';

const routes = [
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/about',
    component: AboutPage
  }
];

export default routes;
