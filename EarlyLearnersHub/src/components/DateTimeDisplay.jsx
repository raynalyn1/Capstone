import React, { useState, useEffect } from 'react'

const DateTimeDisplay = () => {

    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
        <p>{formattedDateTime}</p>
    </div>
  )
}

export default DateTimeDisplay