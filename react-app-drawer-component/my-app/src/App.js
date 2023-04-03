import './AppDrawer.css';
import './App.css';
import AppDrawer from './AppDrawer';

const drawerItems = [
  {
    label: 'About',
    onClick: () => console.log('About clicked'),
  },
  {
    label: 'Get Started',
    onClick: () => console.log('Get Started clicked'),
  },
  {
    label: 'Sign In',
    onClick: () => console.log('Sign In clicked'),
  },
];

function App() {
  return (
    <div>
      <AppDrawer heading="Menu" items={drawerItems} />
    </div>
  );
}

export default App;
