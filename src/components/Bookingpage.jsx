import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../features/bookings/bookingsSlice';

export default function BookingPage() {
  const [dates, setDates] = useState({ from: '', to: '' });
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    dispatch(addBooking({ id: Date.now(), from: dates.from, to: dates.to }));
    alert('Booking confirmed!');
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-6 p-4 border rounded shadow">
      <h2 className="font-bold mb-4">Book Your Stay</h2>
      <label>From:</label>
      <input
        type="date"
        value={dates.from}
        onChange={e => setDates({ ...dates, from: e.target.value })}
        className="w-full p-2 mb-2 border"
        required
      />
      <label>To:</label>
      <input
        type="date"
        value={dates.to}
        onChange={e => setDates({ ...dates, to: e.target.value })}
        className="w-full p-2 mb-2 border"
        required
      />
      <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded">
        Book
      </button>
    </form>
  );
}