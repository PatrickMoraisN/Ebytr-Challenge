import { Route, Switch, BrowserRouter as Routes } from 'react-router-dom';

import Login from '../pages/Login';
import Edit from '../pages/Edit';
import Home from '../pages/Home';
import About from '../pages/About';

const RoutesComponent = () => (
  <Routes>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/edit/:id" component={Edit} />
    </Switch>
  </Routes>
);

export default RoutesComponent;
