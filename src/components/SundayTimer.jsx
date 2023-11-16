import React, { useState, useEffect } from 'react';
import useYoutubeLive from '../hooks/useYoutubeLive'; // Import your custom hook

const SundayTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [reloading, setReloading] = useState(false);
  const liveData = useYoutubeLive();

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.days === 0 && newTimeRemaining.hours === 0 && newTimeRemaining.minutes === 0 && newTimeRemaining.seconds === 0) {
        // Timer reached zero, check for the YouTube Live session
        checkForYoutubeLiveSession();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (reloading) {
      // Reload the page when it's Sunday at 10 AM West African Time
      const now = new Date();
      if (now.getUTCDay() === 0 && now.getUTCHours() === 9 && now.getUTCMinutes() === 0 && now.getUTCSeconds() === 0) {
        window.location.reload();
      }
    }
  }, [reloading]);

  function calculateTimeRemaining() {
    const now = new Date();
    const targetTime = new Date(now);
  
    // Set the target time to the next Sunday at 10 AM West African Time
    targetTime.setUTCHours(9, 0, 0, 0); // Set the time to 9:00:00 (UTC time)
  
    const currentDay = now.getUTCDay();
    const daysUntilService = (7 - currentDay) % 7;
  
    // Check if today is Sunday and the current time is before 10 AM
    if (currentDay === 0 && now.getUTCHours() < 9) {
      // If it's Sunday and the current time is before 10 AM, keep the target time as is.
    } else {
      // Otherwise, calculate for the next Sunday
      targetTime.setUTCDate(now.getUTCDate() + daysUntilService);
    }
  
    const timeDiff = targetTime - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }
  
  
  
  

  function checkForYoutubeLiveSession() {
    if (liveData) {
      // There is a live session, you can implement your logic here.
      // For example, set a state to display the live session.
    } else {
      // No live session found, set reloading to true and start counting down to the next Sunday.
      setReloading(true);
    }
  }

  return (
    <div className='countdown-wrapper'>
      <h2>Next Sunday Service in:</h2>
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

export default SundayTimer;
