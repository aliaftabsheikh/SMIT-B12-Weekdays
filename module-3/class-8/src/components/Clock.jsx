import React, { useState, useEffect } from 'react';
// import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(false);

  // useEffect to update time every second when isRunning is true
  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        console.log('Clock ticking...');
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (timerId) {
        clearInterval(timerId);
        console.log('Cleanup: Timer cleared!');
      }
    };
  }, [isRunning]); // Dependency array with isRunning

  const toggleClock = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div className="Clock">
      <h1>Live Clock</h1>
      <h2>{time}</h2>
      <button onClick={toggleClock}>
        {isRunning ? 'Stop Clock' : 'Start Clock'}
      </button>
    </div>
  );
}

export default Clock;