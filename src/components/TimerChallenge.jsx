export default function TimerChallenge({ title, timer }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p>
        {timer} second{timer > 1 ? "s" : ""}
      </p>
      <button>Start Challenge</button>
      <p>Time is running... timer inactive</p>
    </section>
  );
}
