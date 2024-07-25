import { useEffect, useState } from "react";
import watch from "../assets/watch.jpg"



const CountDownTimer = () => {
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        // if the timer is not active then take the exit or exit the effect early
        if (!isActive) return
        
        // start the timer and increment at every second
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => {
                // when seconds reached 59 so it reset at 0 and increase the minutes by 1
                if (prevSeconds === 59) {
                    setMinutes((prevMinutes) => prevMinutes + 1);
                    return 0
                }
                // otherwise just increment the value
                return prevSeconds + 1;
            })
        }, 1000)

        // clear time interval to stop the timer when isActive changes
        return () => clearInterval(timer)

    }, [isActive])


    const startTimer = () => {
        setIsActive(true)
    }

    const RestartTimer = () => {
        setMinutes(0)
        setSeconds(0)
        setIsActive(false)
    }

    const stopTimer = () => {
        setIsActive(false)
    }

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <div className="buttons">
              <h2>
                  {minutes < 10 ? "0" + minutes : minutes}:
                  {seconds < 10 ? "0" + seconds : seconds}
        </h2>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
              <button onClick={RestartTimer}>Restart</button>
              <div className="time-img">
                  <img src={watch} alt={watch-Image} />
              </div>
      </div>
    </div>
  );
}

export default CountDownTimer