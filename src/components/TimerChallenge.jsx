import { useRef, useState } from "react";

export default function TimerChallenge({ title, timer }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  let timerId = useRef();

  function handleStart() {
    setTimerStarted(true);
    timerId.current = setTimeout(() => {
      setTimerExpired(true);
    }, timer * 1000);
  }

  function handleStop() {
    clearTimeout(timerId.current);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p>
        {timer} second{timer > 1 ? "s" : ""}
      </p>
      <button onClick={timerStarted ? handleStop : handleStart}>
        {timerStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running" : "Timer is inactive"}
      </p>
    </section>
  );
}
