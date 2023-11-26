import { useState, useEffect } from "react";
import "./Calendar.css"; // Your CSS file for styling
import DigitalClock from "./DigitalClock";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  // Update the date every second for the clock
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  const currentDay = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentMonth = monthNames[date.getMonth()];
  const currentYear = date.getFullYear();

  const monthDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    monthDays.push(i);
  }

  const calendarGrid = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const row = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
        row.push("");
      } else {
        row.push(dayCounter);
        dayCounter++;
      }
    }
    calendarGrid.push(row);
  }

  return (
    <div className="card">
      <div className="card-body">
        <DigitalClock />
        <h5 className="card-title">
          {currentMonth} {currentYear}
        </h5>
        <div className="calendar">
          <table className="calendar-table">
            <thead>
              <tr>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <th key={day}>{day}</th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {calendarGrid.map((week, index) => (
                <tr key={index}>
                  {week.map((day, idx) => (
                    <td key={idx} className={day === currentDay ? "today" : ""}>
                      {day !== "" ? day : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
