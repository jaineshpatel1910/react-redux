import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamHookContainer from './components/IceCreamHookContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamHookContainer />
      <NewCakeContainer />
    </div>
  );
}

export default App;
