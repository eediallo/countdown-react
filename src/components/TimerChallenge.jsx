import { useState } from "react";

export default function TimerChallenge({ title, timer }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    setTimeout(() => {
      setTimerExpired(true);
    }, timer * 1000);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p>
        {timer} second{timer > 1 ? "s" : ""}
      </p>
      <button onClick={handleStart}>
        {timerStarted ? "Start" : "Stop"} Challenge
      </button>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running" : "Timer is inactive"}
      </p>
    </section>
  );
}
