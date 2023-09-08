 import React, { lazy } from 'react';
// All components mapping with path for internal routes

//import { lazy } from 'react'

//const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
//const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/404'));
//const Blank = lazy(() => import('../pages/protected/Blank'))
//const Charts = lazy(() => import('../pages/protected/Charts'))
//const Leads = lazy(() => import('../pages/protected/Leads'))
//const Integration = lazy(() => import('../pages/protected/Integration'))
//const Calendar = lazy(() => import('../pages/protected/Calendar'))
const Team = lazy(() => import('../pages/protected/team'));
//const Transactions = lazy(() => import('../pages/protected/Transactions'))
const BillingHistory = lazy(() => import('../pages/protected/billing-history'));
const ProfileSettings = lazy(() => import('../pages/protected/profile-settings'));
//const GettingStarted = lazy(() => import('../pages/GettingStarted'))
//const DocFeatures = lazy(() => import('../pages/DocFeatures'))
//const DocComponents = lazy(() => import('../pages/DocComponents'))


const Dashboard = () => {
  return(
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

const Welcome = () => {
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

const Blank = () => {
  return(
    <div>
      <h1>Blank</h1>
    </div>
  );
}

const MainRoutes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  //{
  //  path: '/leads',
  //  component: Leads,
  //},
  {
    path: '/settings/team',
    component: Team,
  },
  //{
  //  path: '/calendar',
  //  component: Calendar,
  //},
  //{
  //  path: '/transactions',
  //  component: Transactions,
  //},
  {
    path: '/settings/profile',
    component: ProfileSettings,
  },
  {
    path: '/settings/billing',
    component: BillingHistory,
  },
  //{
  //  path: '/getting-started',
  //  component: GettingStarted,
  //},
  //{
  //  path: '/features',
  //  component: DocFeatures,
  //},
  //{
  //  path: '/components',
  //  component: DocComponents,
  //},
  //{
  //  path: '/integration',
  //  component: Integration,
  //},
  //{
  //  path: '/charts',
  //  component: Charts,
  //},
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export {
  MainRoutes,
}
