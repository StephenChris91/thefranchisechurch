import React, { useState, useEffect } from 'react';

const ThursdayTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(4, 19)); // Thursday at 7 PM

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining(4, 19); // Thursday at 7 PM
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.days === 0 && newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
        // Timer reached zero, do something for Thursday service
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining(dayOfWeek, hour) {
    const now = new Date();
    const daysUntilService = (dayOfWeek + 7 - now.getDay()) % 7;
    const targetTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + daysUntilService,
      hour, // 7 PM
      0, // 0 minutes
      0 // 0 seconds
    );

    const timeDiff = targetTime - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className='countdown-wrapper'>
      <h2>Next Service is in:</h2>
      <div className="countdown">
        <div>
          <h1>{timeRemaining.days}</h1>
          <h4>Days</h4>
        </div>
        <div>
          <h1>{timeRemaining.hours}</h1>
          <h4>Hours</h4>
        </div>
        <div>
          <h1>{timeRemaining.minutes}</h1>
          <h4>Minutes</h4>
        </div>
        <div>
          <h1>{timeRemaining.seconds}</h1>
          <h4>Seconds</h4>
        </div>
      </div>
    </div>
  );
};

export default ThursdayTimer;
