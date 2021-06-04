import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomeScreen} />

        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;