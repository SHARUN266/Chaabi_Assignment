import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(prevTime => {
        let hours = prevTime.hours;
        let minutes = prevTime.minutes;
        let seconds = prevTime.seconds + 1;

        if (seconds === 60) {
          seconds = 0;
          minutes = minutes + 1;
        }

        if (minutes === 60) {
          minutes = 0;
          hours = hours + 1;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);



 

  return time.hours
//   return (
//     <div>
//       <div>
//         Hours: {time.hours} Minutes: {time.minutes} Seconds: {time.seconds}
//       </div>
     
//     </div>
//   );
};

export default Timer;
