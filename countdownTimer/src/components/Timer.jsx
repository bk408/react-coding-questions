import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(true);
  };

  const restartTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setIsActive(false);
  };

  const stopTimer = () => {
    setIsActive(false);
    
  };

  return (
    <div>
      <h2>
        {" "}
        {minutes < 10 ? "0" + minutes : minutes}:{" "}
        {seconds < 10 ? "0" + seconds : seconds}{" "}
      </h2>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={restartTimer}>restart</button>
    </div>
  );
};

export default Timer;
