import React from 'react';
import { Store, Star, Clock, MapPin } from 'lucide-react';

const mockStores = [
  { id: 's1', name: 'Highway Mart', rating: 4.6, eta: '32 min', distance: '18 km', category: 'Convenience', location: 'Exit 12 - Pine Ridge' },
  { id: 's2', name: 'TravelStop Cafe', rating: 4.4, eta: '45 min', distance: '27 km', category: 'Cafe', location: 'Lakeview Station' },
  { id: 's3', name: 'Sunrise Hotel Deli', rating: 4.7, eta: '1 hr 10 min', distance: '48 km', category: 'Hotel Deli', location: 'Sunrise Square' },
];

const RoutePreviewList = ({ onSelectStore }) => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Along your route</h2>
          <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-700">View all</a>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockStores.map((s) => (
            <button
              key={s.id}
              onClick={() => onSelectStore?.(s)}
              className="group text-left rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-content-center rounded-xl bg-orange-500/10 text-orange-600">
                  <Store className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-lg font-semibold">{s.name}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{s.category}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="inline-flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" /> {s.rating}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-500" /> {s.eta}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-gray-500" /> {s.distance}
                </span>
              </div>
              <p className="mt-2 line-clamp-1 text-sm text-gray-600 dark:text-gray-300">
                {s.location}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-500">Tap to see menu</span>
                <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-700 group-hover:bg-orange-500/20">Select</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutePreviewList;
