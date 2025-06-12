import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: 'Cape Town',
      image: 'https://images.unsplash.com/photo-1604503468508-0f670d065f7e?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 2,
      name: 'Durban Beachfront',
      image: 'https://images.unsplash.com/photo-1551024734-b1c2f3e07f13?auto=format&fit=crop&w=1600&q=80',
    },
    {
      id: 3,
      name: 'Drakensberg',
      image: 'https://images.unsplash.com/photo-1578898887947-0f1e6f6402f3?auto=format&fit=crop&w=1600&q=80',
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[85vh] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Find Your Perfect Stay ✨
            </h1>
            <p className="text-xl mb-6 drop-shadow-md">
              From city apartments to mountain lodges – we've got it all.
            </p>
            <Link to="/bookings">
              <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300">
                Start Booking
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">🌍 Featured Destinations</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {featuredDestinations.map(({ id, name, image }) => (
            <div
              key={id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 bg-white"
            >
              <img
                src={image}
                alt={name}
                className="h-60 w-full object-cover hover:scale-105 transition duration-300"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-700">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Tour Section */}
      <section className="py-20 bg-gradient-to-r from-red-100 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">🎥 Take a Tour</h2>
          <p className="mb-6 text-lg text-gray-700">
            Get a sneak peek of what your stay could look like in South Africa’s top destinations.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <video
              controls
              className="w-full h-[400px] object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;