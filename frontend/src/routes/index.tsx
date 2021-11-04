import { Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" exact component={Home} />
    <Route path="/edit/:id" exact component={Home} />
  </Switch>
);