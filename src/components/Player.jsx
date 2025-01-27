import { useState } from "react";

export default function Player() {
  let [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setSubmitted(false);
    setPlayerName(e.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "Unknow Entity"}</h2>
      <p>
        <input type="text" value={playerName} onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
