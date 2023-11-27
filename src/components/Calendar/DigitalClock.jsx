import { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const amOrPm = hours >= 12 ? "PM" : "AM";
    const twelveHourFormat = hours % 12 || 12; // Convert 24-hour format to 12-hour format

    const formattedHours =
      twelveHourFormat < 10 ? `0${twelveHourFormat}` : twelveHourFormat;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amOrPm}`;
  };

  return (
    <div className="text-xl text-center">
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default DigitalClock;
