import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HolesScreen from './Screens/HolesScreen';
import HomeScreen from './Screens/HomeScreen';
import LeaderboardScreen from './Screens/LeaderboardScreen';
import NotFoundScreen from './Screens/NotFoundScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={HomeScreen} />
        <Route exact path={'/play'} component={HolesScreen} />
        <Route exact path={'/leaderboard'} component={LeaderboardScreen} />

        <Route component={NotFoundScreen} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;