import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Routes } from 'react-router-dom';

import Login from '../components/Login';
import Edit from '../components/Edit';
import Home from '../components/Home';

const RoutesComponent = () => (
  <Switch>
    <Routes>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/edit/:id" component={Edit} />
    </Routes>
  </Switch>
);

export default RoutesComponent;