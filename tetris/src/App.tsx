import Board from './components/Board';
import UpcomingBlocks from './components/UpcomingBlocks';
import { useTetris } from './hooks/useTetris';
import tetrisImg from './assests/tertisLogo.png'

function App() {
  const { board, startGame, isPlaying, score, upcomingBlocks } = useTetris();

  const handleRestartClick = () => {
    startGame();
  };

  return (
    <div className="app">
      <div className="left-panel">
        {/* <img src={gokuImg} alt="Goku"/>
        <img src={vegImg} alt="Veg" /> */}
      </div>
      <div className="right-panel">
        <img src={tetrisImg} alt='title' className='titleImg'/>
        <Board currentBoard={board} />
        <div className="controls">
          <h2>Score: {score}</h2>
          {isPlaying ? (
            <>
              <div className="upcoming-container">
                <h3>Upcoming Any One Block</h3>
                <div className="upcoming-screen">
                  <UpcomingBlocks upcomingBlocks={upcomingBlocks} />
                </div>
              </div>
              <button className="pause" onClick={handleRestartClick}>
                Restart
              </button>
            </>
          ) : (
            <button onClick={startGame}>New Game</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
