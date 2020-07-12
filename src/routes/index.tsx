import React from 'react';
import { Switch } from 'react-router-dom';

import ReactSelect from '../pages/ReactSelect';
import Checkbox from '../pages/Checkbox';
import Radio from '../pages/Radio';
import ReactDropzone from '../pages/ReactDropzone';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={() => null} />
    <Route path="/react-select" component={ReactSelect} />
    <Route path="/checkbox" component={Checkbox} />
    <Route path="/radio" component={Radio} />
    <Route path="/react-dropzone" component={ReactDropzone} />
  </Switch>
);

export default Routes;
