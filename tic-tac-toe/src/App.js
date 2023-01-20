
import './App.css';
import Header from './component/Header';
import Player from './component/Player';
import Board from './component/Board';

function App() {
  return (
    <div className="App">
    
     <Header />
     <div className='player'>
     <Player whichplayer='O'/>
     <Player whichplayer='X'/>
     </div>
     
     <Board />

    </div>
  );
}

export default App;
