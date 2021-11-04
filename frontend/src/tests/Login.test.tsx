import { render, screen } from '@testing-library/react';
import {Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import Login from '../pages/Login';

describe('<Login /> Page', () => {
  it('should render Ebytr "Logo"', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Login />
    </Router>)
    expect(screen.getByText(/ebytr/i)).toBeInTheDocument()
  });

  it('should render initial phrase', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Login />
    </Router>)
    expect(screen.getByText(/Its about Time!/i)).toBeInTheDocument()
    expect(screen.getByText(/Don't waste it./i)).toBeInTheDocument()
  });

  it('should render try out button', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Login />
    </Router>)
    expect(screen.getByText(/try out now!/i)).toBeInTheDocument()
  });

  it('should redirect to /home when clicking the "Try out" button', () => {
    const history = createMemoryHistory();
    render(<Router history={history}>
      <Login />
    </Router>)
    const button = screen.getByText(/try out now!/i);
    userEvent.click(button, {button: 0})
    expect(history.location.pathname).toEqual('/home')
  });
});
