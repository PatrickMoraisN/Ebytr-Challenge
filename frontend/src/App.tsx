import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { CreateGlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <CreateGlobalStyle />
    </>
  );
}

export default App;
