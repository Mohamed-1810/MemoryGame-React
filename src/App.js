import Cards from './components/Cards';
import Card from './components/Card';
import { useState } from 'react';
function App() {
  function displaygame()
  {

    document.getElementsByClassName('game')[0].style.display="block";
    document.getElementsByClassName('button')[0].style.display="none";
  }
  function reload()
  {
    window.location.reload(false);
  }

  var lives=5;
  // const [lives,setlives]=useState(5);
  return (
    <div className="App">
      <button className="button" onClick={displaygame}>Start Game</button>
      <div className='game'>
      <h1>Memory Game </h1>
      {/* <div className='lives'>Lives :{lives}</div> */}
      <Cards lives={lives}/>
      </div>
      <div className='finish'>
      <button className='game-over'>Game over</button>
      <button className="button" onClick={function(event){displaygame();reload()}}>Play Again</button>
      </div>
    </div>

  );
}

export default App;
