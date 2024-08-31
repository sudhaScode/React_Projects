import './App.css';
import Counter from './Components/Counter';
import Header from './Components/Header';
import Actions from './Components/Actions';

function App() {
  return (
    <div>
      <Header/>
      <div className='user-actions'>
        <Actions/>
      </div>
       <div className="App">
          <Counter/>
       </div>
    </div>
  );
}

export default App;
