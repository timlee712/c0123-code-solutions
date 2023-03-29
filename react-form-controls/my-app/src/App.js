
import './App.css';
import './container.css';
import RegistrationFormUncontrolled from './RegistrationFormUncontrolled';
import RegistrationFormControlled from './RegistrationFormControlled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegistrationFormUncontrolled />
        <RegistrationFormControlled />
      </header>
    </div>
  );
}

export default App;
