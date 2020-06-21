import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from '../pages/Form';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Form} />
  </Switch>
);

export default Routes;
