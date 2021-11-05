import { ToastContainer } from 'react-toastify';
import RoutesComponent from './routes';
import { CreateGlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <RoutesComponent />
      <CreateGlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
