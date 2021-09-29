import './App.css';
import ClickCounter from './components/ClickCounter';
import Render from './components/Render';
import Test from './components/Test';

function App() {
  return (
    <div className="App">
      <Test render={(val)=> val? 'halo': 'chalo'}/>
      <Render render={(val , setVal)=> <ClickCounter val={val} setVal={setVal} />}/>
    </div>
  );
}

export default App;
