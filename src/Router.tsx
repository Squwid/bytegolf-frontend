import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HolesScreen from './Screens/HolesScreen';
import HomeScreen from './Screens/HomeScreen';
import NotFoundScreen from './Screens/NotFoundScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomeScreen} />
        <Route exact path={'/play'} component={HolesScreen} />

        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;