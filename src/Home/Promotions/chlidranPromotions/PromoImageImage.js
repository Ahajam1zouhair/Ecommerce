import React, { useState, useEffect } from "react";

import "./style/timer.css";
export default function PromoImage() {
  const Timers = {
    days: 4,
    hours: 10,
    minutes: 37,
    seconds: 58,
  };
  const [timer, setTimer] = useState(Timers);
  useEffect(() => {
    const handleTimer = () => {
      setTimer((currentTimer) => {
        const newTimer = { ...currentTimer };
        if (newTimer.seconds > 0) {
          newTimer.seconds--;
        } else if (newTimer.minutes > 0) {
          newTimer.minutes--;
          newTimer.seconds = 59;
        } else if (newTimer.hours > 0) {
          newTimer.hours--;
          newTimer.minutes = 59;
          newTimer.seconds = 59;
        } else if (newTimer.days > 0) {
          newTimer.days--;
          newTimer.hours = 23;
          newTimer.minutes = 59;
          newTimer.seconds = 59;
        }
        return newTimer;
      });
    };

    const timerInterval = setInterval(handleTimer, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    
      <div className="flex-container">
        <div className="time">
          <div className="timer">{timer.days} </div>
          <p className="days">Days</p>
        </div>
        <div className="time">
          <div className="timer">{timer.hours}</div>
          <p className="days">Hours</p>
        </div>
        <div className="time">
          <div className="timer">{timer.minutes}</div>
          <p className="days">Minutes</p>
        </div>
        <div className="time">
          <div className="timer">{timer.seconds}</div>
          <p className="days">Seconds</p>
        </div>
      </div>
    
  );
}
