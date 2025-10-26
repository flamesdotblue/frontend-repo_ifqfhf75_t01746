import React, { useState } from 'react';
import { Bus, MapPin, ArrowRight, LocateFixed } from 'lucide-react';

const QuickRouteForm = ({ onSearch }) => {
  const [busNumber, setBusNumber] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ busNumber, origin, destination });
  };

  const detectLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      setOrigin(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
    });
  };

  return (
    <section className="relative -mt-16 z-20 w-full">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/80 p-4 backdrop-blur-md shadow-xl sm:grid-cols-12 dark:bg-white/10"
        >
          <div className="sm:col-span-3">
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-100">Bus number</label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-white/10">
              <Bus className="h-4 w-4 text-gray-500" />
              <input
                value={busNumber}
                onChange={(e) => setBusNumber(e.target.value)}
                placeholder="e.g. 502A"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                aria-label="Bus number"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-100">Origin</label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-white/10">
              <MapPin className="h-4 w-4 text-gray-500" />
              <input
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                placeholder="City or GPS"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                aria-label="Origin"
              />
              <button
                type="button"
                onClick={detectLocation}
                className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                aria-label="Use my location"
              >
                <span className="inline-flex items-center gap-1"><LocateFixed className="h-3.5 w-3.5" /> GPS</span>
              </button>
            </div>
          </div>

          <div className="sm:col-span-4">
            <label className="mb-1 block text-sm font-medium text-gray-800 dark:text-gray-100">Destination</label>
            <div className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 dark:border-white/20 dark:bg-white/10">
              <MapPin className="h-4 w-4 text-gray-500" />
              <input
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="City or Stop"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                aria-label="Destination"
              />
            </div>
          </div>

          <div className="sm:col-span-1 flex items-end">
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-900 dark:bg-orange-500 dark:hover:bg-orange-600"
            >
              Search <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuickRouteForm;
