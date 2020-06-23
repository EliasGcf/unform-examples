import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const Layout = DefaultLayout;

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return (
          <Layout>
            <Component />
          </Layout>
        );
      }}
    />
  );
};

export default Route;
