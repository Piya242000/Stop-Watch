import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  let interval = useRef(null);
  const startTimer = () => {
    interval.current = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 1;
        formatTime(newTime);
        return newTime;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
    formatTime(0);
  };
  const formatTime = (time) => {
    setHour(Math.floor(time / 3600));
    setMin(Math.floor((time % 3600) / 60));
    setSec(Math.floor(time % 60));
  };
  return (
    <>
      <div className="App">
        <div className="box">
          <h1>Stop Watch</h1>
          <p>
            Hours : {hour} Minutes : {min} Seconds : {sec}
          </p>
          <button onClick={startTimer}>Start Timer</button>
          <br />
          <br />
          <button onClick={stopTimer}>Stop Timer</button>
          <br />
          <br />
          <button onClick={resetTimer}>Reset Timer</button>
        </div>
      </div>
    </>
  );
}

export default App;
