import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import DocumentMeta from 'react-document-meta';

import MainLayout from './Layouts/MainLayout';
import Dashboard from './components/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

export const getRoutesConfig = () => [
  {
    name: 'dashboard',
    exact: true,
    path: '/',
    meta: {
      description: 'ClearScore : Assessment to mimic the dashboard',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,example',
        },
      },
      title: 'ClearScore Assessment - Dashboard',
    },
    label: 'Dashboard',
    component: Dashboard,
  },
];

export function makeRoutes() {
  return (
    <MainLayout>
      <Switch>
        {getRoutesConfig().map(({ component: Component, meta, ...props }) => (
          <Route
            {...props}
            key={props.name}
            render={(matchProps) => (
              <><DocumentMeta {...meta} /><Component {...matchProps} /></>
            )}
          />
        ))}
        <Route title="Page Not Found" component={NotFound} />
      </Switch>
    </MainLayout>
  );
}
