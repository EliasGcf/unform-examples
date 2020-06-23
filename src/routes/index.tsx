import React from 'react';
import { Switch } from 'react-router-dom';

import ReactSelect from '../pages/ReactSelect';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={() => null} />
    <Route path="/react-select" component={ReactSelect} />
  </Switch>
);

export default Routes;
