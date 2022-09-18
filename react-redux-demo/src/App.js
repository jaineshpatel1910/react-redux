import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamHookContainer from './components/IceCreamHookContainer';

function App() {
  return (
    <div className="App">
      {/* <CakeContainer /> */}
      <HooksCakeContainer />
      <IceCreamHookContainer />
    </div>
  );
}

export default App;
