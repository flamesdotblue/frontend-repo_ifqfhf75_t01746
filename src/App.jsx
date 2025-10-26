import React, { useState } from 'react';
import { ShoppingCart, User, LogIn } from 'lucide-react';
import HeroCover from './components/HeroCover';
import QuickRouteForm from './components/QuickRouteForm';
import RoutePreviewList from './components/RoutePreviewList';
import FeatureGrid from './components/FeatureGrid';

function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState(null);

  const handleSearch = (payload) => {
    setSearch(payload);
    // In a later iteration, this will call the backend to fetch stores along the route
    // For now, the preview list below gives a feel for the flow
    const el = document.getElementById('preview-list');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-orange-400 to-pink-500" />
            <span className="text-lg font-semibold tracking-tight">Nearbuy Pick</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#preview-list" className="hover:text-white">Stores</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15">
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-orange-600">
              <ShoppingCart className="h-4 w-4" />
              Cart
            </button>
          </div>
        </div>
      </header>

      {/* Hero with Spline */}
      <HeroCover onGetStarted={() => {
        const el = document.getElementById('route-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }} />

      {/* Route form */}
      <div id="route-form" className="relative">
        <QuickRouteForm onSearch={handleSearch} />
      </div>

      {/* Preview list */}
      <div id="preview-list" className="bg-neutral-950">
        <RoutePreviewList onSelectStore={(s) => setSelected(s)} />
      </div>

      {/* Selected chip */}
      {selected && (
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm">
            <span className="text-white/70">Selected:</span>
            <span className="font-semibold text-white">{selected.name}</span>
          </div>
        </div>
      )}

      {/* Features */}
      <FeatureGrid />

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Nearbuy Pick. All rights reserved.</p>
            <div className="text-sm text-white/60">
              {search ? (
                <span>
                  Last search: <span className="text-white">{search.busNumber || '—'}</span> · {search.origin || '—'} → {search.destination || '—'}
                </span>
              ) : (
                <span>Plan your route to see nearby stores.</span>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
