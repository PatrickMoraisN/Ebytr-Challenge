import { CreateGlobalStyle } from './styles/global'

function App() {
  return (
    <div className="App">
      <button type="button" className="testezin" disabled={false}>
        Esse eh um botao simpatico
      </button>
      <CreateGlobalStyle />
    </div>
  );
}

export default App;
