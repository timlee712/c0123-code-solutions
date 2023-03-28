import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  const handleCustomClick = (text) => {
    window.alert(`Clicked ${text}`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomButton text="Submit" color="lightblue" onCustomClick={handleCustomClick} />
        <CustomButton text="Edit" color="grey" onCustomClick={handleCustomClick} />
        <CustomButton text="Delete" color="red" onCustomClick={handleCustomClick} />
      </header>
    </div>
  );
}

export default App;
