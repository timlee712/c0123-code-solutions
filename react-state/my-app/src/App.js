import logo from './logo.svg';
import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ToggleButton text="Btn 1" color="red" />
        <ToggleButton text="Btn 2" color="green" />
        <ToggleButton text="Btn 3" color="blue" />
      </header>
    </div>
  );
}

export default App;
