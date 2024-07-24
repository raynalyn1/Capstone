import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { isSameDay, getMonth } from 'date-fns';

const Calendar = () => {
  const holidays = [
    { date: '2024-01-01', name: 'New Year\'s Day', description: 'Celebrates the first day of the year.' },
    { date: '2024-03-28', name: 'Maundy Thursday', description: 'A Christian holiday falling on the Thursday before Easter.' },
    { date: '2024-03-29', name: 'Good Friday', description: 'A Christian holiday commemorating the crucifixion of Jesus.' },
    { date: '2024-04-01', name: 'Easter Monday', description: 'A holiday celebrated the day after Easter Sunday.' },
    { date: '2024-04-09', name: 'Araw ng Kagitingan', description: 'A Philippine national holiday in honor of Filipino and American soldiers who fought during World War II.' },
    { date: '2024-05-10', name: 'Araw ng mga Bayani', description: 'Honors the bravery of all Filipino heroes.' },
    { date: '2024-06-12', name: 'Independence Day', description: 'Commemorates the Philippine Declaration of Independence from Spain in 1898.' },
    { date: '2024-08-21', name: 'Ninoy Aquino Day', description: 'A national holiday in the Philippines commemorating the assassination of former Senator Benigno "Ninoy" Aquino, Jr.' },
    { date: '2024-08-26', name: 'National Heroes Day', description: 'Honors the Filipino heroes who fought for the country\'s freedom.' },
    { date: '2024-11-01', name: 'All Saints Day', description: 'A Christian festival in honor of all the saints, known and unknown.' },
    { date: '2024-12-25', name: 'Christmas Day', description: 'Celebrates the birth of Jesus Christ.' },
    { date: '2024-12-31', name: 'New Year\'s Eve', description: 'The day before New Year\'s Day.' },
    { date: '2025-01-01', name: 'New Year\'s Day', description: 'Celebrates the first day of the year.' },
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonthHolidays, setCurrentMonthHolidays] = useState([]);

  useEffect(() => {
    const month = selectedDate ? getMonth(selectedDate) : getMonth(new Date());
    const filteredHolidays = holidays.filter(holiday => getMonth(new Date(holiday.date)) === month);
    setCurrentMonthHolidays(filteredHolidays);
  }, [selectedDate]);

  const highlightDates = holidays.map(holiday => new Date(holiday.date));

  return (
    <div className="p-4 border rounded shadow-lg flex gap-5">
      <div>
        <h3 className="text-lg font-semibold mb-4">Calendar</h3>
        <DatePicker
          inline
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          highlightDates={highlightDates}
          dayClassName={(date) => holidays.some(holiday => isSameDay(new Date(holiday.date), date)) ? 'holiday' : undefined}
        />
      </div>
      <div>
        <h4 className="text-md font-semibold mb-4">Holidays</h4>
        <ul className="list-disc list-inside overflow-y-auto">
          {currentMonthHolidays.map((holiday, index) => (
            <li key={index}>
              {new Date(holiday.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} - {holiday.name}
              <p className="text-sm text-gray-600">{holiday.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Calendar;
