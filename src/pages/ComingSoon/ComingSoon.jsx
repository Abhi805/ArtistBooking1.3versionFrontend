import React, { useState, useEffect } from "react";
import "./ComingSoon.css";

function ComingPage() {
  // Fixed deadline - 15th July 2025
  const deadline = "2025-06-20T17:00:00";

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const deadlineTime = new Date(deadline).getTime();

      const distance = deadlineTime - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ 
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000); 

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="coming-soon"> 
      <h1>Coming Soon t</h1>
      <p>We are launching on 20th Jun 2025</p>
      <div className="counter">
        <div>
          <span>{timeLeft.days}</span>days
        </div>
        <div>
          <span>{timeLeft.hours}</span>hours
        </div>
        <div>
          <span>{timeLeft.minutes}</span>minutes
        </div>
        <div>
          <span>{timeLeft.seconds}</span>seconds
        </div>
      </div>
    </div>
  );
}

export default ComingPage;
