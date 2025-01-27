import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" timer={1} />
        <TimerChallenge title="Not Easy" timer={5} />
        <TimerChallenge title="Getting Tough" timer={10} />
        <TimerChallenge title="PROS ONLY" timer={15} />
      </div>
    </>
  );
}

export default App;
