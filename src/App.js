import { Color } from './components/Color';
import { Chuck } from './components/Chuck';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Greatest App Ever</h1>
        Click a button below to be amazed by modern technology!
      </header>
      <div className="App-Container">
        <Color />
        <Chuck />
      </div>
    </div>
  );
}

export default App;
