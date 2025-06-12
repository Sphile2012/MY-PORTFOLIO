import React from 'react';

const Bookings = () => {
  const bookings = [
    {
      id: 1,
      title: 'Oceanview Penthouse – Cape Town',
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=80',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      date: '12–15 July 2025',
      guests: 2,
    },
    {
      id: 2,
      title: 'Luxury Safari Lodge – Kruger Park',
      image: 'https://images.unsplash.com/photo-1582719478181-c4a7b1f1fbe5?auto=format&fit=crop&w=1600&q=80',
      video: 'https://www.w3schools.com/html/movie.mp4',
      date: '20–23 September 2025',
      guests: 4,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Bookings</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {bookings.map(({ id, title, image, video, date, guests }) => (
          <div key={id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-600 text-sm">📅 {date}</p>
              <p className="text-gray-600 text-sm">👥 {guests} Guests</p>
            </div>
            <video
              src={video}
              controls
              className="w-full h-40 object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;